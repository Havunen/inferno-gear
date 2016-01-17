import {Inferno, Component} from './infernowrapper';
import {classNames} from './utils';

export default class IGearInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        // Bindings
        this.goEdit = this.goEdit.bind(this);
    }

    goEdit() {
        this.setState({
            editing: true
        });
    }

    render() {
        return (
            <label class={classNames({'igear-input':true, 'edit':this.state.editing===true})}>
                <input onFocus={this.goEdit} class="igear-input-field" type="text" value={this.props.value} />
                <span class="igear-input-label">{this.props.label}</span>
                <span class="igear-input-underline"></span>
            </label>
        )
    }
}