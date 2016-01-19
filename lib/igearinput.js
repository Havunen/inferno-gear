import {Inferno, Component} from './infernowrapper';
import {classNames} from './utils';

export default class IGearInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        // Privates
        this._hasValue = false;

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

    _onInput(event, value) {
        this._hasValue = value.length > 0;
    }

    //
    // Public
    //

    render() {
        const value = this.props.value,
            floatLabel = !!value || this._hasValue,
            isDisabled = this.props.disabled;

        let type = 'text';

        if (this.props.type) {
            type = this.props.type;
        }

        return (
            <div class={classNames({'igear-input':true, 'edit':this.state.editing===true, 'disabled':isDisabled})}>
                <input type={type} disabled={isDisabled} onFocus={this._onFocus} onBlur={this._onBlur} onInput={this._onInput} class="igear-input-field" value={value} />
                <span class={classNames({'igear-input-label':true, 'float':floatLabel})}>{this.props.label}</span>
                <span class="igear-input-underline"></span>
            </div>
        )
    }
}