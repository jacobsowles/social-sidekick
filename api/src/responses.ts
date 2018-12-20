import { Response } from 'express';

const alreadyExistsResponse = (response: Response, entityName: string) => {
  return errorResponse(response, 409, entityName + ' already exists');
};

const doesNotExistResponse = (response: Response, entityName: string) => {
  return errorResponse(response, 409, entityName + ' does not exists');
};

const errorResponse = (response: Response, statusCode: number, errorMessage: string) => {
  return response.status(statusCode).json({ message: errorMessage });
};

const createdResponse = (response: Response, data: object) => {
  return response.status(201).json(data);
};

const missingParamResponse = (response: Response, paramName: string) => {
  return errorResponse(response, 400, 'Parameter `' + paramName + '` is required.');
};

const okResponse = (response: Response, data: object) => {
  return response.status(200).json(data);
};

const stateMismatchErrorResponse = (response: Response, errorMessage: string) => {
  return errorResponse(response, 409, errorMessage);
};

const unknownErrorResponse = (response: Response, errorMessage: string) => {
  return errorResponse(response, 500, errorMessage);
};

export {
  alreadyExistsResponse,
  createdResponse,
  doesNotExistResponse,
  errorResponse,
  missingParamResponse,
  okResponse,
  stateMismatchErrorResponse,
  unknownErrorResponse
};
