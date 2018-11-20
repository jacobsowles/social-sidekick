import { should } from 'chai';
import {
  configure,
  mount as enzymeMount,
  render as enzymeRender,
  shallow as enzymeShallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

let _component;

const init = component => {
  should();
  configure({ adapter: new Adapter() });

  _component = component;
};

const mount = () => {
  return enzymeMount(_component());
};

const render = () => {
  return enzymeRender(_component());
};

const shallow = () => {
  return enzymeShallow(_component());
};

export { init, mount, render, shallow };
