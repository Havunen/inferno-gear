import {Inferno, Component} from './../../../lib/infernowrapper';
import {CodeBlock} from './../components/codeblock';
import IGearCalendar from './../../../lib/igearcalendar';

export class CalendarPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Calendar</span></h2>
                <div class="code-example">
                    <span class="description">Calendar can...(todo)</span>
                    <div class="example">
                        <IGearCalendar />
                    </div>
                    <CodeBlock />
                </div>
            </div>
        )
    }
}
