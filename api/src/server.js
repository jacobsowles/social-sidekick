import app from './app';
import http from 'http';
import normalizePort from 'normalize-port';

const port = normalizePort(process.env.PORT || '8080');

app.server = http.createServer(app).listen(port, () => {
  console.log(`API started on port ${port}`);
});
