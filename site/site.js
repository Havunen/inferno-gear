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

