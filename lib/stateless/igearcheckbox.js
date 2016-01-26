import {Inferno} from './../infernowrapper';

export const IGearCheckbox = ({checked, text, onChange}) => (
    <label class="igear-tgl ">
        <input type="checkbox" value={checked} onChange={onChange} />
        {text}
    </label>
);
