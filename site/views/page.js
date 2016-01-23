import {Inferno, Component} from './../../lib/infernowrapper';
import {InputPage} from './pages/inputpage';
import {DropdownPage} from './pages/dropdownpage';
import {AvatarPage} from './pages/avatarpage';

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
            </div>
        )
    }
}
