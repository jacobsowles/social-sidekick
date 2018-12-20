import axios, { AxiosResponse } from 'axios';

interface IApiService {
  getAccessToken: (
    authCode: string | string[],
    serviceId: string | string[],
    serviceName: string,
    state: string | string[],
    userId: string | string[]
  ) => Promise<AxiosResponse>;
  getUserServices: (userId: string) => Promise<AxiosResponse>;
}

class ApiService implements IApiService {
  public getAccessToken = async (
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

  public getUserServices = async (userId: string): Promise<AxiosResponse> => {
    return axios.get(`/api/userServices?userId=${userId}`);
  };
}

export default ApiService;
