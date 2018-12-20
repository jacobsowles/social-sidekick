import axios, { AxiosResponse } from 'axios';

export const getAccessToken = async (
  authCode: string | string[],
  serviceId: string | string[],
  serviceName: string,
  state: string | string[],
  userId: string | string[]
): Promise<AxiosResponse> => {
  return axios.post(`/api/connections/authorize/${serviceName}/access-token`, {
    code: authCode,
    serviceId,
    state,
    userId
  });
};

export const getUserServices = async (userId: string): Promise<AxiosResponse> => {
  return axios.get(`/api/userServices?userId=${userId}`);
};
