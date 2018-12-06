const Service = require('./Service.model');

export const add = () => {
  return; // TODO
};

export const get = (id: string) => {
  return; // TODO
};

export const getAll = (request: any, response: any) => {
  Service.find({}, (error: any, services: any[]) => {
    if (error) {
      response.send(error);
    }

    response.send(services);
  });
};

export const remove = (): void => {
  return; // TODO
};

export const update = (id: string) => {
  return; // TODO
};
