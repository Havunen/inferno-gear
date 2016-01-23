import {Inferno, Component} from './../../../lib/infernowrapper';
import IGearDropDown from './../../../lib/igeardropdown';
import {CodeBlock} from './../components/codeblock';
import {RandomUserStore} from './../stores/RandomUserStore';


const customLayout = (obj) =>
<div class="user-sample">
    <img class="user-sample-pic" src={obj.user.picture.thumbnail} alt="" />
    <div class="user-sample-details">
        <span class="user-sample-title">{obj.user.name.title}</span>
        <span class="user-sample-name">{obj.user.name.first} {obj.user.name.last}</span>
    </div>
</div>;

export class DropdownPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            randomPersons: null
        };

        this.updateFromStore = this.updateFromStore.bind(this);

    }

    updateFromStore() {
        this.setState({
            randomPersons: RandomUserStore.datasource
        });
        console.log("UPDATE FROM STORE");
    }

    componentWillMount() {
        RandomUserStore.addChangeListener(this.updateFromStore);
    }

    componentWillUnMount() {
        RandomUserStore.removeChangeListener(this.updateFromStore);
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Dropdown</span></h2>
                <div class="code-example">
                    <span class="description">Dropdown can have simple text array and work like static dropdown. Dropdown can be disabled.</span>
                    <div class="example">
                        <IGearDropDown items={['Sampo','Sanni','John','James']} label="Normal text" />
                        <IGearDropDown items={[]} label="Empty list" />
                        <IGearDropDown label="disabled" disabled={true} />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>


                <div class="code-example">
                    <span class="description">Dropdown can render custom item layout, get data using ajax and have custom filtering.</span>
                    <div class="example">
                        <IGearDropDown items={this.state.randomPersons} source={RandomUserStore.getData} itemLayout={customLayout} label="People dropdown" />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>
            </div>
        )
    }
}
