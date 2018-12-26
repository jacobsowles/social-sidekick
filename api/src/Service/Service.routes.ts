import axios from 'axios';
import { Request, Response } from 'express';

import { missingParamResponse, okResponse, unknownErrorResponse } from '../responses';
import { access } from 'fs';

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

export async function getGitHubProfileDetails(request: Request, response: Response) {
  if (!request.query.userId) {
    return missingParamResponse(response, 'userId');
  }

  try {
    const accessToken = await getAccessToken('GitHub', request.query.userId);

    // TODO: store github API url in .env
    const gitHubResponse = await axios.get(
      `https://api.github.com/user?access_token=${accessToken}`
    );

    return okResponse(response, gitHubResponse.data);
  } catch (error) {
    return unknownErrorResponse(response, JSON.stringify(error));
  }
}

export async function updateGitHubProfileDetails(request: Request, response: Response) {
  if (!request.query.userId) {
    return missingParamResponse(response, 'userId');
  }

  try {
    const accessToken = await getAccessToken('GitHub', request.query.userId);

    // TODO: store github API url in .env
    const gitHubResponse = await axios.patch(
      `https://api.github.com/user?access_token=${accessToken}`,
      {
        bio: request.body.bio,
        company: request.body.company,
        location: request.body.location,
        website: request.body.website
      }
    );

    return okResponse(response, gitHubResponse.data);
  } catch (error) {
    return unknownErrorResponse(response, JSON.stringify(error));
  }
}

const getAccessToken = async (serviceName: string, userId: string) => {
  const service = await Service.findOne({ name: serviceName }).exec();
  const connection = await Connection.findOne({
    service: service._id,
    user: userId
  }).exec();

  return connection.accessToken;
};
