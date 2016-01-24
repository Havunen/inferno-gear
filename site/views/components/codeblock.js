import {Inferno, Component, InfernoDOM, childrenTemplate} from './../../../lib/infernowrapper';

export class CodeBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <pre>
                <code class={this.props.className}>{this.props.children}</code>
            </pre>
        );
    }
}