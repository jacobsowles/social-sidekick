import {
  configure,
  mount as enzymeMount,
  render as enzymeRender,
  shallow as enzymeShallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { init as initIcons } from '@core/icons';
import { LocalStorageMock, should } from './test-base';
import { Global } from './types';

let componentUnderTest: () => any;
let topLevelElementTypeUnderTest: any;

const init = (component: () => any, topLevelElementType: any) => {
  initIcons();
  should();
  configure({ adapter: new Adapter() });
  componentUnderTest = component;
  topLevelElementTypeUnderTest = topLevelElementType;
};

const mount = () => {
  return enzymeMount(componentUnderTest());
};

const mountTopLevelElement = () => {
  return mount()
    .find(topLevelElementTypeUnderTest)
    .first();
};

const render = () => {
  return enzymeRender(componentUnderTest());
};

const renderTopLevelElement = () => {
  return render()
    .find(topLevelElementTypeUnderTest)
    .first();
};

const shallow = () => {
  return enzymeShallow(componentUnderTest());
};

const shallowTopLevelElement = () => {
  return shallow()
    .find(topLevelElementTypeUnderTest)
    .first();
};

declare var global: Global;
global.localStorage = new LocalStorageMock();

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
