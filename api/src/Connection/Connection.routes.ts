import { Request, Response } from 'express';
const Connection = require('./Connection.model');

export const add = () => {
  return; // TODO
};

export const get = (id: string) => {
  return; // TODO
};

export const getAllForUser = (request: Request, response: Response) => {
  Connection.find({ user: request.query.userId }, (error: any, connections: any[]) => {
    if (error) {
      response.send(error);
    }

    response.send(connections);
  });
};

export const remove = (): void => {
  return; // TODO
};

export const update = (id: string) => {
  return; // TODO
};
