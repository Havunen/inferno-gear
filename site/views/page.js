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
                    <span class="description">Basic text input</span>
                    <IGearInput value="" label="text input" />
                    <pre>
                        <code>
                            <IGearInput value="" label="text input" />
                        </code>
                    </pre>
                </div>

                <div class="code-example">
                    <span class="description">Basic text input with value</span>
                    <IGearInput value="Sampo Kivistö" label="Author" />
                    <CodeBlock className="JavaScript">
                        Test
                    </CodeBlock>
                </div>
            </div>
        )
    }
}