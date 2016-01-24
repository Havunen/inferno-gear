import {Inferno, Component, InfernoDOM} from './infernowrapper';
import {classNames} from './utils'

// TODO: Change this to background color when it works...
const stringToColour = function(str) {
    const strLen = str.length;
    let hash = 0,
        colour = '#';

    for (let i = 0; i < strLen; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
};

export default ({title, picture}) => {
    const characters = title ? title.match(/\b(\w)/g) || [] : [],
        firstAndSecond = characters.join('');

    return (
        <div style={{backgroundColor: stringToColour(firstAndSecond)}} class={classNames('igear-avatar')}>
            {typeof picture === 'string' ? <img class="igear-avatar-img" src={picture} title={title} /> : null}
            {title && !picture ? <span class="igear-avatar-letter">{firstAndSecond}</span> : null}
        </div>
    )
}