import {Inferno, Component, InfernoDOM} from './../../../lib/infernowrapper'
import {IGearInput} from './../../../lib/index';
import {CodeBlock} from './../components/codeblock';

export class InputPage extends Component {
    constructor(props) {
        super(props);

        this._demoChange = InfernoDOM.createRef();
        this._demoKeyup = InfernoDOM.createRef();

        this.onInputChange = this.onInputChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onInputChange(event, value) {
        this._demoChange.element.innerHTML += '\n Change value(' + value + ')';
    }

    onKeyUp(event, value) {
        this._demoKeyup.element.innerHTML += '\n Keyup btn(' + event.which + ') value (' + value + ')';
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Input</span></h2>
                <div class="code-example">
                    <span class="description">Inputs can have different types, and be disabled. Inputs will autosize itself while typing up to maximum 100% width of parent element. This behavior can be overriden by CSS styles.</span>
                    <div class="example">
                        <IGearInput value="" label="text input"/>
                        <IGearInput value="Sampo Kivistö" label="Author"/>
                        <IGearInput type="password" value="" label="password input"/>
                        <IGearInput label="disabled input" disabled={true} />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>

                <div class="code-example">
                    <span class="description">Input can have character counters and maximum length.</span>
                    <div class="example">
                        <IGearInput charCounter={true} label="Simple character counter" />
                        <IGearInput charCounter={true} maxLength={10} label="Input with at most 10 characters" />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>

                <div class="code-example">
                    <span class="description">The label can have different floating states.</span>
                    <div class="example">
                        <IGearInput floatingLabel={true} label="This label is always floating" />
                        <IGearInput placeholder="This label never floats" />
                        <IGearInput placeholder="placeholder text" label="Placeholder & label. Label is forced to float" />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>

                <div class="code-example">
                    <span class="description">Input can show error messages.</span>
                    <div class="example">
                        <IGearInput errorMessage="There is something wrong!" label="This input has error" />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>

                <div class="code-example">
                    <span class="description">Input events, onChange and onKeyUp.</span>
                    <div class="example">
                        <IGearInput label="I will raise events" onChange={this.onInputChange} onKeyUp={this.onKeyUp} />
                        <pre class="log" ref={this._demoChange}></pre>
                        <pre class="log" ref={this._demoKeyup}></pre>
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>

                <div class="code-example">
                    <span class="description">Properties</span>
                    <table class="properties-table">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Default</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tr>
                            <td>onChange</td>
                            <td>function</td>
                            <td>-</td>
                            <td>Occurs when value is changed</td>
                        </tr>
                        <tr>
                            <td>onKeyUp</td>
                            <td>function</td>
                            <td>-</td>
                            <td>Occurs when keyboard button is released.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>String</td>
                            <td>-</td>
                            <td>Preselected value</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>String</td>
                            <td>-</td>
                            <td>Animated label for input</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>String</td>
                            <td>-</td>
                            <td>Watermark text for input field.</td>
                        </tr>
                        <tr>
                            <td>floatingLabel</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>Forces label to float</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>Disables the input field.</td>
                        </tr>
                        <tr>
                            <td>charCounter</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>Show character counter below input.</td>
                        </tr>
                        <tr>
                            <td>maxLength</td>
                            <td>Number</td>
                            <td>-</td>
                            <td>Maximum length for input field. Can be used together with charCounter.</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
