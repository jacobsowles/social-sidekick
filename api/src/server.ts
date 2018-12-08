import bodyParser from 'body-parser';
import chalk from 'chalk';
import compression from 'compression';
import connectMongo from 'connect-mongo';
import dotenv from 'dotenv';
import errorHandler from 'errorhandler';
import express, { Errback, Express, Request, Response } from 'express';
import session from 'express-session';
import expressValidator from 'express-validator';
import http from 'http';
import mongoose from 'mongoose';
import logger from 'morgan';

import routes from './routes';

const app: Express = express();

dotenv.config();

const port = process.env.PORT || '8080';
const MongoStore = connectMongo(session);

mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.MONGODB_URI || '');
mongoose.connection.on('error', err => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(logger('dev'));
app.use(
  session({
    cookie: { maxAge: 1209600000 },
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || '',
    store: new MongoStore({
      autoReconnect: true,
      url: process.env.MONGODB_URI || ''
    })
  })
);

routes(app);

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((error: Errback, request: Request, response: Response) => {
    console.error(error);
    response.status(500).send('Server Error');
  });
}

http.createServer(app).listen(port, () => {
  console.log(`API started on port ${port}`);
});
