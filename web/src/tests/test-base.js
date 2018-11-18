import { should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const init = () => {
  should();
  configure({ adapter: new Adapter() });
};

export { init };
