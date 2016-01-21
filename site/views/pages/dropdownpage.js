import {Inferno, Component} from './../../../lib/infernowrapper';
import IGearDropDown from './../../../lib/igeardropdown';
import {CodeBlock} from './../codeblock';

const customLayout = (item) => <div class="sample">{item.firstName} {item.lastName}</div>;

export class DropdownPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        var items = [
            {firstName: 'Sampo', lastName:'Kivistö'},
            {firstName: 'Sanni', lastName:'Kallio'},
            {firstName: 'John', lastName:'Matthew'},
            {firstName: 'James', lastName:'Scott'}
        ];

        return (
            <div>
                <h2 class="separator"><span class="h2text">Dropdown</span></h2>
                <div class="code-example">
                    <span class="description"></span>
                    <div class="example">
                        <IGearDropDown value={items[0]} itemLayout={customLayout} items={items[1]} value="" label="Brand"></IGearDropDown>
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>

            </div>
        )
    }
}
