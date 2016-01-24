import {Inferno, Component, InfernoDOM} from './infernowrapper';
import {classNames} from './utils'
import moment from 'moment';

export default class extends Component {
    constructor(props) {
        super(props);

        const date = props.value || moment();

        this.state = {
            date: date
        };

        this.dayNames = [
            date.day(0).format(this.weekFormat),
            date.day(1).format(this.weekFormat),
            date.day(2).format(this.weekFormat),
            date.day(3).format(this.weekFormat),
            date.day(4).format(this.weekFormat),
            date.day(5).format(this.weekFormat),
            date.day(6).format(this.weekFormat)
        ];
    }

    get weekFormat() {
        return 'ddd';
    }

    render() {



        console.log("hi");
//var array = [];
/*
for(let i = 0; i <= days; i++) {
    let current = moment(start).add(i, 'days');
    array.push(current);
}*/


        return (
            <div class="igear-calendar">
                <div class="igear-row header">
                    <div class="igear-cell week">Week</div>
                    {this.dayNames.map(function(week, index) {
                        return <div key={index} class="igear-cell">{week}</div>
                    })}
                </div>
                {(function(date) {
                    const rangeStart = moment(date).startOf('month').startOf('week'),
                        rangeEnd = moment(date).endOf('month').endOf('week'),
                        datesLength = rangeEnd.diff(rangeStart, 'days'),
                        rowsLength = (datesLength +1) / 7,
                        weekDays = [1,2,3,4,5,6,7],
                        rows = [];

                    // TODO: Refactor this to more effecient solution
                    //let counter = -1;

                    for (let i=1; i<rowsLength; i++) {
                        rows.push(
                            <div class="igear-row">
                                <div class="igear-cell week">{rangeStart.add(i).week()}</div>
                                {weekDays.map(function(value, index){
                                    return <div class="igear-cell" key={index}>{rangeStart.add(1, 'days').date()}</div>
                                })}
                            </div>
                        )
                    }

                    return rows;
                })(this.state.date)}
            </div>
        )
    }
}
