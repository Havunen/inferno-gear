import {Inferno, Component} from './../../lib/infernowrapper'
import {IGearInput} from './../../lib/index';

export class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Editable input</span></h2>
                <IGearInput value="" label="text input" />
            </div>
        )
    }
}