import {Inferno, InfernoDOM} from './../lib/infernowrapper';
import {Header} from './views/header';
import {Page} from './views/page';

InfernoDOM.render(<Header />, document.getElementById('header'));
InfernoDOM.render(<Page />, document.getElementById('content'));
