import {Inferno, Component, InfernoDOM} from './infernowrapper';
import {classNames} from './utils'
import moment from 'moment';

const today = moment();

class CellTemplate extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
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
    }

    get weekFormat() {
        return 'ddd';
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
                <div class="igear-row">
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
        return (
            <div class="igear-calendar">
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
