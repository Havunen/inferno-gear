import {Inferno} from './../infernowrapper';

export const CharCounter = ({value, maxvalue}) => <div class="igear-charcounter">{maxvalue ? value + ' / ' + maxvalue : value}</div>;
