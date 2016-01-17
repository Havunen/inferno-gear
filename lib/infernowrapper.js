// Inferno
import createTemplate, { addTreeConstructor } from './../node_modules/inferno-src/src/core/createTemplate';
import TemplateFactory from './../node_modules/inferno-src/src/core/TemplateFactory';

// Component
import InfernoComponent from './../node_modules/inferno-src/src/component/Component';
import updateComponent from './../node_modules/inferno-src/src/component/updateComponent';

// InfernoDOM
import { render } from './../node_modules/inferno-src/src/DOM/rendering';
import createRef from './../node_modules/inferno-src/src/DOM/createRef';
import createDOMTree from './../node_modules/inferno-src/src/DOM/createTree';


const InfernoWrap = {
    createTemplate,
    TemplateFactory,
    addTreeConstructor
};

// Fixes for browser
InfernoWrap.addTreeConstructor('dom', createDOMTree);
window.InfernoComponent = InfernoComponent;
window.InfernoComponent.updateComponent = updateComponent;

export const Inferno = InfernoWrap;
export const InfernoDOM = {
    render: render,
    createRef: createRef
};
export const Component = InfernoComponent;
