import { Express } from 'express';

import * as services from './Service/Service.routes';

export default (app: Express) => {
  app.get('/api/connections', services.getAll);
  app.get('/api/services', services.getAll);
};
