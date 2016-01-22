import {Inferno, InfernoDOM, Component} from './../lib/infernowrapper';
import {Header} from './views/header';
import {Page} from './views/page';

InfernoDOM.render(<Header />, document.getElementById('header'));
InfernoDOM.render(<Page />, document.getElementById('content'));

//class Test extends Component {
//    constructor(props) {
//        super(props);
//    }
//
//    render() {
//        return null;
//    }
//}
//
//InfernoDOM.render(<Test />, document.body);





