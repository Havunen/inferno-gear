import {Inferno, InfernoDOM, Component} from './../lib/infernowrapper';
import {Header} from './views/header';
import {Page} from './views/page';

InfernoDOM.render(<Header />, document.getElementById('header'));
InfernoDOM.render(<Page />, document.getElementById('content'));



//class StyleIssue extends Component {
//    constructor(props) {
//        super(props);
//    }
//
//    render() {
//        return (
//            <div>
//                <div style={{'display': 'block'}}>Hi, I'm red</div>
//            </div>
//        )
//    }
//}


//InfernoDOM.render(<StyleIssue />, document.body);
