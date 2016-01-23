import {Inferno, Component} from './../../../lib/infernowrapper';
import {CodeBlock} from './../components/codeblock';
import IGearAvatar from './../../../lib/igearavatar';

export class AvatarPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 class="separator"><span class="h2text">Avatar</span></h2>

                <div class="code-example">
                    <span class="description">Avatar is simple stateless component that will display user picture if its available. <br />
                        If picture is not available it displays first characters of up to two first letters. Background colour is calulated based on title.</span>
                    <div class="example">
                        <IGearAvatar title="Sampo Kivistö" />
                        <IGearAvatar title="Sampo" />
                        <IGearAvatar title="Sampo Kivistö" picture="https://avatars0.githubusercontent.com/u/2021355?v=3&u=cdc24368223a98d0fd70bf344711041785bf4951&s=140" />
                    </div>
                    <CodeBlock className="xml">
                    </CodeBlock>
                </div>
            </div>
        )
    }
}
