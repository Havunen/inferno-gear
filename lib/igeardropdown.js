import {Inferno, Component} from './infernowrapper';
import IGearInput from './igearinput';

export default class extends IGearInput {
    constructor(props) {
        super(props);
    }

    renderExtension() {

        return (
            <ul>
                {this.props.items.map((itemObj, key) => {
                    return <li key={key}>{this.props.itemLayout(itemObj)}</li>
                })}
            </ul>
        )
    }
}