import {Inferno, Component, InfernoDOM} from './infernowrapper';
import {classNames} from './utils'
import moment from 'moment';

const today = moment();

class CellTemplate extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(event) {
        this.props.onCellClick(event, this.props.day);
    }

    render() {
        return (
            <div class={classNames('igear-cell', {
                'today': this.props.day.isSame(today, 'day'),
                'selected': this.props.day.isSame(this.props.selectedDate, 'day'),
                'out': !this.props.day.isSame(this.props.selectedDate, 'month')
            })} onClick={this._handleClick}>
                {this.props.day.date()}
            </div>
        )
    }

}

export default class extends Component {
    constructor(props) {
        super(props);

        const value = props.value || moment();

        this.state = {
            selectedDate: value
        };

        const temp = moment();
        this.dayNames = [
            temp.weekday(0).format(this.weekFormat),
            temp.weekday(1).format(this.weekFormat),
            temp.weekday(2).format(this.weekFormat),
            temp.weekday(3).format(this.weekFormat),
            temp.weekday(4).format(this.weekFormat),
            temp.weekday(5).format(this.weekFormat),
            temp.weekday(6).format(this.weekFormat)
        ];

        // Bindings
        this.buildCalendar = this.buildCalendar.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.goToMonth = this.goToMonth.bind(this);
        this.goToYear = this.goToYear.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    get weekFormat() {
        return 'ddd';
    }

    goToMonth(event, month) {
        const newDate = moment([this.state.selectedDate.year(), month, 1]);
        this.selectDate(event, newDate);
    }

    goToYear(event, year) {
        const newDate = moment([year, this.state.selectedDate.month(), 1]);
        this.selectDate(event, newDate);
    }

    prevMonth(event) {
        const newDate = moment(this.state.selectedDate).add(-1, 'month');
        this.selectDate(event, newDate);
    }

    nextMonth(event) {
        const newDate = moment(this.state.selectedDate).add(1, 'month');
        this.selectDate(event, newDate);
    }

    selectDate(event, date) {
        console.log("Hey!");
        this.setState({
            selectedDate: date
        });
    }

    buildCalendar() {
        const selectedDate = this.state.selectedDate,
            rangeStart = moment(selectedDate).startOf('month').startOf('week').add(-1, 'days'),
            rangeEnd = moment(selectedDate).endOf('month').endOf('week'),
            datesLength = rangeEnd.diff(rangeStart, 'days'),
            rowsLength = (datesLength) / 7,
            weekDays = [1,2,3,4,5,6,7],
            rows = [];

        // TODO: Refactor this to more effecient solution
        //let counter = -1;

        for (let i=0; i<rowsLength; i++) {
            rows.push(
                <div key={i} class="igear-row">
                    <div class="igear-cell week">{moment(rangeStart).add(1, 'days').week()}</div>
                    {weekDays.map(function(value, index) {
                        const currentDate = moment(rangeStart.add(1, 'days'));
                        return <CellTemplate key={index} selectedDate={selectedDate} day={currentDate} onCellClick={this.selectDate} />;
                    }, this)}
                </div>
            )
        }

        return rows;
    }

    render() {
        const selectedDate = this.state.selectedDate;
        return (
            <div class="igear-calendar">
                <div class="igear-calendar-header">
                    <div class="igear-calendar-day">{selectedDate.format('dddd')}</div>
                    <div class="igear-calendar-date">
                        <span>
                            <a onClick={this.prevMonth} class="arrow">
                                <span class="left-arrow"></span>
                            </a>
                        </span>
                        <span>
                            <select class="igear-calendar-select" value={selectedDate.month()} onChange={this.goToMonth}>
                                {(function() {
                                    // TODO: could be option
                                    let options = [];
                                    for(let i = 0; i < 12; i++) {
                                        let month = moment().add(i, 'month');
                                        options.push(<option value={month.month()}>{month.format('MMM')}</option>);
                                    }
                                    return options;
                                })()}
                            </select>
                        </span>
                        <span style={{fontSize: '2.5rem'}}>{selectedDate.date()}</span>
                        <span>
                            <select class="igear-calendar-select" value={selectedDate.format('YYYY')} onChange={this.goToYear}>
                                {(function() {
                                    // TODO: could be option
                                    let options = [];
                                    for(let i = -5; i <= 5; i++) {
                                        let year = moment(selectedDate).add(i, 'year').format('YYYY');
                                        options.push(<option value={year}>{year}</option>);
                                    }
                                    return options;
                                })()}
                            </select>
                        </span>
                        <span>
                            <a onClick={this.nextMonth} class="arrow">
                                <span class="right-arrow"></span>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="igear-row header">
                    <div class="igear-cell week">Week</div>
                    {this.dayNames.map(function(week, index) {
                        return <div key={index} class="igear-cell">{week}</div>
                    })}
                </div>
                {this.buildCalendar()}
            </div>
        )
    }
}
