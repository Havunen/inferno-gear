import {Inferno, InfernoDOM, Component} from './../lib/infernowrapper';
import {Header} from './views/header';
import {Page} from './views/page';

InfernoDOM.render(<Header />, document.getElementById('header'));
InfernoDOM.render(<Page />, document.getElementById('content'));


//class BuggyRender extends Component {
//    constructor(props) {
//        super(props);
//
//        this.state = {
//            empty: true
//        };
//
//        this.toggle = this.toggle.bind(this);
//    }
//
//    toggle() {
//        this.setState({
//            empty: !this.state.empty
//        });
//    }
//
//    render() {
//        return (
//            <div>
//                <button onClick={this.toggle}>Empty</button>
//                <ul>
//                    {(() => {
//                        if (this.state.empty === true) {
//                            return <li>No cars!</li>
//                        } else {
//                            return ['BMW', 'Volvo', 'Saab'].map(function(car) {
//                                return <li>{car}</li>;
//                            });
//                        }
//                    })()}
//                </ul>
//            </div>
//        )
//    }
//}
//
//
//InfernoDOM.render(<BuggyRender />, document.body);
