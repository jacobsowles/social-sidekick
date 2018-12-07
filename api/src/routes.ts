import { Express } from 'express';

import * as services from './Service/Service.routes';

export default (app: Express) => {
  app.get('/api/connections', services.getForUser);
  app.get('/api/servicesForUser', services.getForUser);
};
