import chaiJestSnapshot from 'chai-jest-snapshot';
import {
  configure,
  mount as enzymeMount,
  ReactWrapper,
  render as enzymeRender,
  shallow as enzymeShallow,
  ShallowWrapper
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { ReactElement } from 'react';
import configureStore from 'redux-mock-store';

import { init as initIcons } from '@core/icons';
import { chai, LocalStorageMock, should } from './test-base';
import { Global } from './types';

let componentUnderTest: () => ReactElement<{}>;
let topLevelElementTypeUnderTest: Cheerio | ReactElement<{}> | string | undefined;

const init = (
  component: () => ReactElement<{}>,
  topLevelElementType?: Cheerio | ReactElement<{}> | string
) => {
  initIcons();
  chai.use(chaiJestSnapshot);
  should();
  configure({ adapter: new Adapter() });
  componentUnderTest = component;
  topLevelElementTypeUnderTest = topLevelElementType;
};

const mount = (): ReactWrapper => {
  return enzymeMount(componentUnderTest());
};

const mountTopLevelElement = (): ReactWrapper => {
  return mount()
    .find(topLevelElementTypeUnderTest as string)
    .first();
};

const render = (): Cheerio => {
  return enzymeRender(componentUnderTest());
};

const renderTopLevelElement = (): Cheerio => {
  return render()
    .find(topLevelElementTypeUnderTest as Cheerio)
    .first();
};

const shallow = (): ShallowWrapper => {
  return enzymeShallow(componentUnderTest());
};

const shallowTopLevelElement = (): ShallowWrapper => {
  return shallow()
    .find(topLevelElementTypeUnderTest as string)
    .first();
};

declare var global: Global;
global.localStorage = new LocalStorageMock();

const mockStore = configureStore();

export {
  init,
  mockStore,
  mount,
  mountTopLevelElement,
  render,
  renderTopLevelElement,
  shallow,
  shallowTopLevelElement,
  should,
  toJson
};
