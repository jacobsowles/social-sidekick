import { Request, Response } from 'express';
const Connection = require('./Connection.model');

export const getForUser = (request: Request, response: Response) => {
  Connection.find({ user: request.query.userId }, (error: any, connections: any[]) => {
    if (error) {
      response.send(error);
    }

    response.send(connections);
  });
};
