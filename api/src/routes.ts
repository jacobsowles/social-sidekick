import axios from 'axios';
import { Express } from 'express';
import qs from 'querystring';

import * as connections from './Connection/Connection.routes';
import * as services from './Service/Service.routes';

export default (app: Express) => {
  app.get('/api/connections', connections.getForUser);
  app.post('/api/connections/authorize/github/access-token', connections.getGitHubAccessToken);
  app.post('/api/connections/authorize/github/auth-url', connections.getGitHubAuthUrl);
  app.post('/api/connections/remove', connections.remove);

  app.get('/api/userServices', services.getForUser);
};
