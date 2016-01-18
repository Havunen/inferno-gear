import {Inferno, Component} from './infernowrapper';
import {classNames} from './utils';

export default class IGearInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        // Bindings
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onInput = this._onInput.bind(this);
    }

    //
    // Private
    //

    _onFocus() {
        this.setState({
            editing: true
        });
    }

    _onBlur() {
        this.setState({
            editing: false
        });
    }

    _onInput() {

    };


    //
    // Public
    //

    render() {
        const value = this.props.value,
            floatLabel = !!value;

        return (
            <div class={classNames({'igear-input':true, 'edit':this.state.editing===true})}>
                <input onFocus={this._onFocus} onBlur={this._onBlur} class="igear-input-field" type="text" value={value} />
                <span class={classNames({'igear-input-label':true, 'float':floatLabel})}>{this.props.label}</span>
                <span class="igear-input-underline"></span>
            </div>
        )
    }
}