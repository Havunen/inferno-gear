import {Inferno, InfernoDOM, Component} from './../lib/infernowrapper';
import {Header} from './views/header';
import {Page} from './views/page';

InfernoDOM.render(<Header />, document.getElementById('header'));
InfernoDOM.render(<Page />, document.getElementById('content'));


//class ChangeChildrenCount extends Component {
//    constructor(props) {
//        super(props);
//
//        this.state = {
//            list: ['1']
//        };
//
//        // Bindings
//        this.handleClick = this.handleClick.bind(this);
//    }
//
//    handleClick() {
//        this.setState({
//            list: ['1',  '2', '3', '4']
//        });
//    }
//
//    render() {
//        return (
//            <div>
//                <button onClick={this.handleClick}>1</button>
//                {this.state.list.map(function (x, i) {
//                    return <div key={i}>{i}</div>
//                })}
//            </div>
//        );
//    }
//}
//
//
//InfernoDOM.render(<ChangeChildrenCount />, document.body);
//

//
//const StatelessComponent = ({value}) => (
//    <p>{value}</p>
//);
//
//class First extends Component {
//    constructor(props) {
//        super(props);
//
//        this.state = {
//            obj: {
//                count: 0
//            },
//            obj2: {
//                test: 0
//            }
//        };
//
//        this._onClick = this._onClick.bind(this);
//    }
//
//    _onClick() {
//        this.setState({
//           obj: {
//             count: 1
//           }
//        });
//    }
//
//    render() {
//        return (
//            <div>
//                <button onClick={this._onClick}></button>
//                <ul>
//                    {this.state.obj.count}
//                </ul>
//            </div>
//        )
//    }
//}
//
//InfernoDOM.render(<First name="John" />, document.getElementById('first'));
//InfernoDOM.render(<First name="Peter" />, document.getElementById('second'));

//var div = document.getElementById('first');
//
//class Com3 extends Component {
//    constructor(props) {
//        super(props);
//    }
//
//    componentWillUnmount() {
//        console.log("COM3");
//    }
//
//    render() {
//        return (
//            <div>
//            </div>
//        );
//    }
//}
//
//class Com2 extends Component {
//    constructor(props) {
//        super(props);
//    }
//
//    componentWillUnmount() {
//        console.log("COM2");
//    }
//
//    render() {
//        return (
//            <div>
//                <Com3 />
//            </div>
//        );
//    }
//}
//
//class Com1 extends Component {
//    constructor(props) {
//        super(props);
//    }
//
//    componentWillUnmount() {
//        console.log("Com1");
//    }
//
//    render() {
//        return (
//            <div>
//                <Com2 />
//            </div>
//        );
//    }
//}
//
//InfernoDOM.render(<Com1 />, div);
//
//setTimeout(function() {
//    InfernoDOM.render(<Com2 />, div);
//}, 1600);
