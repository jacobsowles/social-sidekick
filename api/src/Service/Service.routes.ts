import { Request, Response } from 'express';

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

  if (connections.length === 0) {
    response.send('Unable to retrieve connections.'); // TODO: put this in a proper error object
  }

  const userServices: any[] = services.map((service: any) => {
    return {
      isConnected:
        connections.filter(connection => connection.service.equals(service._id)).length > 0,
      name: service.name // TODO: return the entire service object
    };
  });

  response.send(userServices);
}
