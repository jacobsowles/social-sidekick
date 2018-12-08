import { Express } from 'express';

import * as connections from './Connection/Connection.routes';
import * as services from './Service/Service.routes';

export default (app: Express) => {
  app.get('/api/connections', connections.getForUser);
  app.post('/api/connections', connections.add);
  app.post('/api/connections/remove', connections.remove);

  app.get('/api/servicesForUser', services.getForUser);
};
