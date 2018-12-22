import axios from 'axios';
import { Request, Response } from 'express';
import queryString from 'querystring';
import randomString from 'randomstring';

import {
  alreadyExistsResponse,
  createdResponse,
  doesNotExistResponse,
  missingParamResponse,
  okResponse,
  stateMismatchErrorResponse,
  unknownErrorResponse,
  errorResponse
} from '../responses';
const Connection = require('./Connection.model');

export const getGitHubAuthUrl = async (request: Request, response: Response): Promise<Response> => {
  // TODO: return method not allowed for anything other than POST

  // TODO: refactor param checking to reduce duplicate code
  if (!request.body.serviceId) {
    return missingParamResponse(response, 'serviceId');
  }

  if (!request.body.userId) {
    return missingParamResponse(response, 'userId');
  }

  request.session!.state = randomString.generate();

  return response.json({
    url:
      'https://github.com/login/oauth/authorize?' +
      queryString.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        redirect_uri:
          process.env.CLIENT_BASE_URL +
          `/oauth-callback?serviceId=${request.body.serviceId}&userId=${request.body.userId}`,
        scope: 'user',
        state: request.session!.state
      })
  });
};

export const getGitHubAccessToken = async (
  request: Request,
  response: Response
): Promise<Response> => {
  // TODO: refactor param checking to reduce duplicate code
  if (!request.body.code) {
    return missingParamResponse(response, 'code');
  }

  if (!request.body.serviceId) {
    return missingParamResponse(response, 'serviceId');
  }

  if (!request.body.state) {
    return missingParamResponse(response, 'state');
  }

  if (!request.body.userId) {
    return missingParamResponse(response, 'userId');
  }

  const code: string = request.body.code;
  const returnedState: string = request.body.state;
  const serviceId: string = request.body.serviceId;
  const userId: string = request.body.userId;

  let accessToken: string;

  try {
    const existingConnection = await Connection.find({
      service: serviceId,
      user: userId
    }).exec();

    if (existingConnection && existingConnection.length > 0) {
      return alreadyExistsResponse(response, 'Connection');
    }
  } catch (error) {
    return unknownErrorResponse(
      response,
      'Operation failed while searching for existing connection. ' + JSON.stringify(error)
    );
  }

  try {
    if (request.session!.state === returnedState) {
      const githubResponse = await axios.post(
        'https://github.com/login/oauth/access_token?' +
          queryString.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: process.env.CLIENT_BASE_URL + '/oauth-callback',
            state: request.session!.state
          })
      );

      const data = queryString.parse(githubResponse.data);
      accessToken = data.access_token as string;
    } else {
      return stateMismatchErrorResponse(response, 'Returned state does not match request state.');
    }
  } catch (error) {
    return errorResponse(response, error.response.status, JSON.stringify(error));
  }

  try {
    const connection = await Connection.create({
      accessToken,
      service: serviceId,
      user: userId
    });

    return createdResponse(response, connection);
  } catch (error) {
    return unknownErrorResponse(response, JSON.stringify(error));
  }
};

export const getForUser = async (request: Request, response: Response): Promise<Response> => {
  return Connection.find({ user: request.query.userId })
    .exec()
    .then((connections: any[]) => response.status(200).json(connections))
    .catch((error: any) => response.status(500).json({ message: error.message }));
};

export const remove = async (request: Request, response: Response): Promise<Response> => {
  // TODO: refactor param checking to reduce duplicate code
  if (!request.body.userId) {
    return missingParamResponse(response, 'userId');
  }

  if (!request.body.serviceId) {
    return missingParamResponse(response, 'serviceId');
  }

  const existingConnection = await Connection.find({
    service: request.body.serviceId,
    user: request.body.userId
  }).exec();

  if (!existingConnection || existingConnection.length === 0) {
    return doesNotExistResponse(response, 'Connection');
  }

  return Connection.deleteOne({ service: request.body.serviceId, user: request.body.userId })
    .then(() => okResponse(response, existingConnection))
    .catch((error: any) => unknownErrorResponse(response, error.message));
};
