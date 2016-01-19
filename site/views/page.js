import {Inferno, Component} from './../../lib/infernowrapper'
import {IGearInput} from './../../lib/index';
import {CodeBlock} from './codeblock';

export class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Editable input</span></h2>
                <div class="code-example">
                    <span class="description">Input can have different types, and be disabled.</span>
                    <div class="example">
                        <IGearInput value="" label="text input"/>
                        <IGearInput value="Sampo Kivistö" label="Author"/>
                        <IGearInput type="password" value="" label="password input"/>
                        <IGearInput label="disabled input" disabled={true} />
                    </div>
                    <CodeBlock className="xml">
                        &lt;IGearInput value=&quot;&quot; label=&quot;text input&quot;/&gt;
                        &lt;IGearInput value=&quot;Sampo Kivist&#246;&quot; label=&quot;Author&quot;/&gt;
                        &lt;IGearInput type=&quot;password&quot; value=&quot;&quot; label=&quot;password input&quot;/&gt;
                        &lt;IGearInput label=&quot;disabled input&quot; disabled /&gt;
                    </CodeBlock>
                </div>
            </div>
        )
    }
}
