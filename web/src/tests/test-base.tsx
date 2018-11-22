import { should } from 'chai';
import {
  configure,
  mount as enzymeMount,
  render as enzymeRender,
  shallow as enzymeShallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

let _component: Function;
let _topLevelElementType: any;

const init = (component: Function, topLevelElementType: any) => {
  should();
  configure({ adapter: new Adapter() });
  _component = component;
  _topLevelElementType = topLevelElementType;
};

const mount = () => {
  return enzymeMount(_component());
};

const mountTopLevelElement = () => {
  return mount()
    .find(_topLevelElementType)
    .first();
};

const render = () => {
  return enzymeRender(_component());
};

const renderTopLevelElement = () => {
  return render()
    .find(_topLevelElementType)
    .first();
};

const shallow = () => {
  return enzymeShallow(_component());
};

const shallowTopLevelElement = () => {
  return shallow()
    .find(_topLevelElementType)
    .first();
};

export {
  init,
  mount,
  mountTopLevelElement,
  render,
  renderTopLevelElement,
  shallow,
  shallowTopLevelElement,
  should
};
