import {Inferno, Component, InfernoDOM, childrenTemplate} from './../../../lib/infernowrapper';
import hljs from 'highlight.js';

export class CodeBlock extends Component {
    constructor(props) {
        super(props);

        this._codeBlock = InfernoDOM.createRef();
    }

    componentDidMount() {
        this.highlightCode();
    }
    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        hljs.highlightBlock(this._codeBlock.element);
    }

    render() {
        return (
            <pre>
                <code ref={this._codeBlock} className={this.props.className}>{this.props.children}</code>
            </pre>
        );
    }
}