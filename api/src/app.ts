import express, { Express } from 'express';
import routes from './routes';

const app: Express = express();
routes(app);

export default app;
