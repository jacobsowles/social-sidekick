import { init, service } from '../tests/test-base';
import AuthService from './AuthService';

jest.mock('../History/history', () => {
  return {
    replace: jest.fn()
  };
});

describe('AuthService', () => {
  init(AuthService);

  describe('logout', () => {
    beforeEach(() => {
      localStorage.setItem('access_token', 'Access Token');
      localStorage.setItem('id_token', 'ID Token');
      localStorage.setItem('expires_at', 'Expires At');

      service.logout();
    });

    it('should remove `access_token` from local storage', () => {
      expect(localStorage.getItem('access_token')).toBe(null);
    });

    it('should remove `id_token` from local storage', () => {
      expect(localStorage.getItem('id_token')).toBe(null);
    });

    it('should remove `expires_at` from local storage', () => {
      expect(localStorage.getItem('expires_at')).toBe(null);
    });
  });
});
