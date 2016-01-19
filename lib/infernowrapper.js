// Inferno
import createTemplate, { addTreeConstructor } from 'inferno-src/src/core/createTemplate';
import TemplateFactory from 'inferno-src/src/core/TemplateFactory';

// Component
import InfernoComponent from 'inferno-src/src/component/Component';

// InfernoDOM
import { render } from 'inferno-src/src/DOM/rendering';
import createRef from 'inferno-src/src/DOM/createRef';
import createDOMTree from 'inferno-src/src/DOM/createTree';


const InfernoWrap = {
    createTemplate,
    TemplateFactory,
    addTreeConstructor
};

// Fixes for browser
InfernoWrap.addTreeConstructor('dom', createDOMTree);

export const Inferno = InfernoWrap;
export const InfernoDOM = {
    render: render,
    createRef: createRef
};
export const Component = InfernoComponent;
