export default (app: any) => {
  const connections = require('./Connection/Connection.routes');
  app.post('/connections', connections.add);
};
