import Inferno from 'inferno';
import InfernoComponent from 'inferno-component'

export default class InfernoInput extends InfernoComponent.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" value="Hello Inferno" />
            </div>
        )
    }
}