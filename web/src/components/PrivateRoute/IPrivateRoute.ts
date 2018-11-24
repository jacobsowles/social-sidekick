import { ReactType } from 'react';

export default interface IPrivateRoute {
  component: ReactType;
  isAuthenticated: boolean;
  login: (...args: any[]) => any;
  path: string;
}
