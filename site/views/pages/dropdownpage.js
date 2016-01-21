import {Inferno, Component} from './../../../lib/infernowrapper';
import IGearDropDown from './../../../lib/igeardropdown';
import {CodeBlock} from './../codeblock';

const customLayout = (item) => <div class="sample">{item.firstName} {item.lastName}</div>;

export class DropdownPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Dropdown</span></h2>
                <div class="code-example">
                    <span class="description">Dropdown can render custom item layout or simple text.</span>
                    <div class="example">
                        <IGearDropDown items={['Sampo','Sanni','John','James']} label="Normal text" />
                        <IGearDropDown items={[]} label="Empty list" />
                        <IGearDropDown itemLayout={customLayout} label="Custom html layout" />
                        <IGearDropDown label="disabled" disabled={true} />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>
            </div>
        )
    }
}
