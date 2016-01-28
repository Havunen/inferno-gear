import {Inferno, Component} from './infernowrapper';
import {classNames} from './utils';
import {CharCounter} from './stateless/charcounter';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            inputLen: 0
        };

        // Privates
        this._valueLen = 0;

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
        this.setState({
            inputLen: value.length
        });
    }

    //
    // Public
    //

    render() {
        const value = this.props.value,
            inputLen = this.state.inputLen,
            placeholder = this.props.placeholder,
            floatLabel =  !!value || inputLen > 0 || this.props.floatingLabel === true || (placeholder && this.props.label),
            label = this.props.label,
            isDisabled = this.props.disabled,
            type = this.props.type || 'text',
            maxLength = this.props.maxLength,
            errorMessage = this.props.errorMessage;

        let valueLen = 0,
            labelLen = 0,
            placeholderLen = 0;

        if (value) {
            valueLen = value.length;
        }
        if (label) {
            labelLen = label.length;
        }
        if (placeholder) {
            placeholderLen = placeholder.length;
        }


        this._valueLen = Math.max(inputLen, valueLen);
        const minSize = Math.max(this._valueLen, labelLen, placeholderLen, 10),
            className = classNames(
                'igear-input' ,{
                'edit':this.state.editing === true,
                'disabled':isDisabled,
                'error':errorMessage
            }),
            spanClassName = classNames(
                'igear-input-label', {
                'float':floatLabel
            });

        return (
            <div class={className}>
                <input placeholder={placeholder} size={minSize} type={type} maxlength={maxLength} disabled={isDisabled} onFocus={this._onFocus} onBlur={this._onBlur} onInput={this._onInput} onChange={this.props.onChange} onKeyUp={this.props.onKeyUp} class="igear-input-field" value={value} />
                <span class={spanClassName}>{label}</span>
                <span class="igear-input-underline"></span>
                {this.props.charCounter === true ? <CharCounter value={this._valueLen} maxvalue={this.props.maxLength} /> : null}
                {errorMessage ? <div class="igear-errormsg">{errorMessage}</div> : null}
            </div>
        )
    }
}