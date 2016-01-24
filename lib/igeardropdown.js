import {Inferno, Component, InfernoDOM} from './infernowrapper';
import IGearInput from './igearinput';
import {classNames} from './utils'

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            activeIndex: -1,
            searchValue: ''
        };

        // Privates
        this._valueLen = 0;
        this._root = InfernoDOM.createRef();

        // Bindings
        this.handleFocusout = this.handleFocusout.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onInput = this._onInput.bind(this);
        this._selectItem = this._selectItem.bind(this);
    }

    //
    // Private
    //

    _selectItem(index, event) {
        const onChange = this.props.onChange;
        if (typeof onChange === 'function') {
            onChange(event, this.props.items[index], index);
        }
    }

    _onFocus() {
        const source = this.props.source;
        if (typeof source === 'function' && !this.props.items) {
            source();
        }
        this.setState({
            editing: true
        });
    }

    _onInput(event, value) {
        this.setState({
            searchValue: value
        });
    }

    //
    // Methods
    //

    handleFocusout(event) {
        if (this.state.editing === true
            && this._root.element.contains(event.target) === false) {
            // Close dropdown
            console.log("Close dropdown");
            this.setState({
                editing: false,
                searchValue: ''
            });
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.handleFocusout);
        document.addEventListener('focus', this.handleFocusout);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleFocusout);
        document.removeEventListener('focus', this.handleFocusout);
    }

    filterItems(value) {
        const items = this.props.items;
        if (!items) {
            return;
        }

        if (this.props.filter) {
            return this.props.filter(items, value);
        }

        return items.filter(function(text) {
            return (value.length == 0 ||
                text.toString()
                    .toLowerCase()
                    .indexOf(value.toString().toLowerCase()) > -1);
        });
    }

    //
    // Public
    //

    render() {
        const value = this.props.value,
            inputLen = this.state.searchValue.length,
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

        const items = this.filterItems(this.state.searchValue),
            customLayout = this.props.itemLayout;

        return (
            <div ref={this._root} class={className}>
                <label>
                    <input placeholder={placeholder} size={minSize} type={type} maxlength={maxLength} disabled={isDisabled} value={this.state.searchValue} onFocus={this._onFocus} onInput={this._onInput} class="igear-input-field" />
                    {function(){
                        if (value) {
                            return <div class="igear-selected">{customLayout ? customLayout(value) : value}</div>
                        }
                        return null;
                    }.call(this)}
                </label>
                <span class={spanClassName}>{label}</span>
                <span class="igear-input-underline"></span>
                {function(){
                    if (items) {
                        return (
                            <ul class="igear-dd">
                                {function(){
                                    if (items.length === 0) {
                                        return <li><span class="igear-item">Nothing to show</span></li>
                                    } else {
                                        return items.map(function(item, key) {
                                            return <li onClick={this._selectItem.bind(this, key)} class="igear-dditem" key={key}>{customLayout ? customLayout(item) : <span class="igear-item">{item}</span>}</li>
                                        }, this)
                                    }
                                }.call(this)}
                            </ul>
                        )
                    }
                    return null;
                }.call(this)}
                {errorMessage ? <div class="igear-errormsg">{errorMessage}</div> : null}
            </div>
        )
    }
}