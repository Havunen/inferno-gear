import {Inferno, Component} from './../../../lib/infernowrapper';
import {CodeBlock} from './../components/codeblock';
import {IGearCheckbox} from './../../../lib/stateless/igearcheckbox';

export class CheckboxPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Checkbox</span></h2>

                <div class="code-example">
                    <span class="description">Avatar is simple stateless component that will display user picture if its available. <br />
                        If picture is not available it displays first characters of up to two first letters. Background colour is calulated based on title.</span>
                    <div class="example">
                        <IGearCheckbox checked={true} text="JabaDii" />
                        <IGearCheckbox text="" />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>
            </div>
        )
    }
}
