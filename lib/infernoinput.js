import {Component} from 'inferno-component'

export default class InfernoInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="text" value="Hello Inferno" />
        )
    }
}