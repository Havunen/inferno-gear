import Inferno from 'inferno';
window.Inferno = Inferno;
import InfernoDOM from 'inferno-dom';
window.InfernoDOM = InfernoDOM;

import {InfernoInput} from './../lib/index';


InfernoDOM.render(<InfernoInput />, document.getElementById('site'));
