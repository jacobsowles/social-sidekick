import { Request, Response } from 'express';

import { okResponse, unknownErrorResponse } from '../responses';

const Connection = require('../Connection/Connection.model');
const Service = require('./Service.model');

export async function getForUser(request: Request, response: Response) {
  let connections: any[] = [];
  let services: any[] = [];

  await Promise.all([
    Connection.find({ user: request.query.userId })
      .exec()
      .then((data: any) => (connections = data))
      .catch((error: any) => response.send(error)),
    Service.find({})
      .exec()
      .then((data: any) => (services = data))
      .catch((error: any) => response.send(error))
  ]);

  if (services.length === 0) {
    return unknownErrorResponse(response, 'Unable to retrieve services.');
  }

  const userServices: any[] = services.map((service: any) => {
    return {
      _id: service._id,
      isConnected:
        connections.filter(connection => connection.service.equals(service._id)).length > 0,
      name: service.name
    };
  });

  return okResponse(response, userServices);
}
