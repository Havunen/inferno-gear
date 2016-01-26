import {Inferno} from './../infernowrapper';

export const IGearCheckbox = ({checked, text, onChange}) => (
    <label class="igear-tgl">
        <input class="igear-chbx" type="checkbox" value={checked} onChange={onChange} />
        {text}
    </label>
);
