import {Inferno, Component} from './../../lib/infernowrapper';
import {InputPage} from './pages/inputpage';
import {DropdownPage} from './pages/dropdownpage';
import {AvatarPage} from './pages/avatarpage';
import {CalendarPage} from './pages/calendarpage';
import {CheckboxPage} from './pages/checkboxpage';

function is_touch_device() {
    return (('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}

if (!is_touch_device()) {
    document.body.classList.add('no-touch');
}

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
                <CheckboxPage />
            </div>
        )
    }
}
