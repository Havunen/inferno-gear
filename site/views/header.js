import {Inferno, Component} from './../../lib/infernowrapper';
import packageJSON from './../../package.json';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="header">
                <img class="site-logo" src="inferno.png" />
                <h1><span>i</span>gear</h1>
                <p>Open source component library for <a href="https://github.com/trueadm/inferno">InfernoJS</a>. Inspired by <a href="https://www.google.com/design/spec/material-design/introduction.html">Google material design</a> and in place editing.<br />
                In my opinion runtime performance and instant responsivness of UI controls is really important for web applications, which is why I started building this library.<br />
                To provide basic web controls with superior performance and simple design.<br />

                Inferno iGear is currently under active development, I'm adding more features each day.

                Special thanks for <a href="https://github.com/trueadm">@trueadm</a>, <a href="https://github.com/kflash">@kflash</a>, <a href="https://github.com/kuraga">@kuraga</a>, <a href="https://github.com/tejacques">@tejacques</a> and rest of <a href="https://github.com/trueadm/inferno/graphs/contributors">InfernoJS contributors</a> who has made this library possible!</p>
                <h3>
                    <span class="links note">v{packageJSON.version}</span>
                    -
                    <a href="https://github.com/Havunen/inferno-gear" class="links">View Github Project</a>
                    -
                    <a href="#" class="links">Download</a>
                </h3>
            </section>
        )
    }
}
