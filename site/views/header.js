import {Inferno, Component} from './../../lib/infernowrapper';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="header">
                <img class="site-logo" src="inferno.png" />
                <h1><span>i</span>GEAR</h1>
                <p>Open source component library for <a href="https://github.com/trueadm/inferno">InfernoJS</a>. Inspired by <a href="https://www.google.com/design/spec/material-design/introduction.html">Google material design</a> and in place editing.</p>
                <h3>
                    <span class="links note">V1.0.0</span>
                    -
                    <a href="#" class="links">View Github Project</a>
                    -
                    <a href="#" class="links">Download</a>
                </h3>
            </section>
        )
    }
}
