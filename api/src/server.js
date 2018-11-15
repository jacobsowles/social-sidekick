import bodyParser from 'body-parser';
import chalk from 'chalk';
import compression from 'compression';
import connectMongo from 'connect-mongo';
import dotenv from 'dotenv';
import errorHandler from 'errorhandler';
import expressStatusMonitor from 'express-status-monitor';
import expressValidator from 'express-validator';
import http from 'http';
import logger from 'morgan';
import mongoose from 'mongoose';
import normalizePort from 'normalize-port';
import session from 'express-session';
import app from './app';

dotenv.config();

const port = normalizePort(process.env.PORT || '8080');
const MongoStore = connectMongo(session);

mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', err => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(expressStatusMonitor());
app.use(logger('dev'));

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: new MongoStore({
      url: process.env.MONGODB_URI,
      autoReconnect: true
    })
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

app.server = http.createServer(app).listen(port, () => {
  console.log(`API started on port ${port}`);
});
