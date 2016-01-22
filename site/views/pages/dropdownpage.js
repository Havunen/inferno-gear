import {Inferno, Component} from './../../../lib/infernowrapper';
import IGearDropDown from './../../../lib/igeardropdown';
import {CodeBlock} from './../components/codeblock';
import RandomUserStore from './../stores/RandomUserStore';


const customLayout = (item) => <div class="sample">{item.firstName} {item.lastName}</div>;

export class DropdownPage extends Component {
    constructor(props) {
        super(props);


        this.updateFromStore = this.updateFromStore.bind(this);

        this.randomPersons = null;
        this.storeLoading = false;
    }

    updateFromStore() {
        this.randomPersons = RandomUserStore.datasource;
        this.storeLoading = RandomUserStore.loading;
        console.log("UPDATE FROM STORE");
    }

    componentWillMount() {
        RandomUserStore.addListener(this.updateFromStore);
    }

    componentWillUnMount() {
        RandomUserStore.removeAllListeners();
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Dropdown</span></h2>
                <div class="code-example">
                    <span class="description">Dropdown can render custom item layout or simple text. If items array is empty it means no data is available. If its null or undefined Dropdown will raise event when it needs data: (TODO: documentation)</span>
                    <div class="example">
                        <IGearDropDown items={['Sampo','Sanni','John','James']} label="Normal text" />
                        <IGearDropDown items={[]} label="Empty list" />
                        <IGearDropDown loading={this.storeLoading} items={this.randomPersons} source={RandomUserStore.getData} itemLayout={customLayout} label="Custom html layout + store + ajax" />
                        <IGearDropDown label="disabled" disabled={true} />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>
            </div>
        )
    }
}
