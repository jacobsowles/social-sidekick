import axios, { AxiosResponse } from 'axios';

interface IApiService {
  getAccessToken: (
    authCode: string | string[],
    serviceId: string | string[],
    serviceName: string,
    state: string | string[],
    userId: string | string[]
  ) => Promise<AxiosResponse>;
  getConnections: (userId: string) => Promise<AxiosResponse>;
  getGitHubProfileDetails: (userId: string) => Promise<AxiosResponse>;
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

  public getConnections = async (userId: string): Promise<AxiosResponse> => {
    return axios.get(`/api/connections?userId=${userId}`);
  };

  public getGitHubProfileDetails = async (userId: string): Promise<AxiosResponse> => {
    return axios.get(`/api/services/github?userId=${userId}`);
  };

  public getUserServices = async (userId: string): Promise<AxiosResponse> => {
    return axios.get(`/api/userServices?userId=${userId}`);
  };

  public updateGitHubProfileDetails = async (
    bio: string,
    blog: string,
    company: string,
    location: string,
    userId: string
  ): Promise<AxiosResponse> => {
    return axios.patch(`/api/services/github?userId=${userId}`, {
      bio,
      blog,
      company,
      location
    });
  };
}

export default ApiService;
