import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById('root'));
