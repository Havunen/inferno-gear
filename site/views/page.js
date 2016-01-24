import {Inferno, Component} from './../../lib/infernowrapper';
import {InputPage} from './pages/inputpage';
import {DropdownPage} from './pages/dropdownpage';
import {AvatarPage} from './pages/avatarpage';
import {CalendarPage} from './pages/calendarpage';

export class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <InputPage />
                <DropdownPage />
                <AvatarPage />
                <CalendarPage />
            </div>
        )
    }
}
