import ReactDOM from 'react-dom';
import { makeRoutes } from './routes';
import './index.scss';

const routes = makeRoutes();

ReactDOM.render(routes, document.getElementById('root'));
