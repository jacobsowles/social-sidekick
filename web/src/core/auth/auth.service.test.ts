import moment from 'moment';

import { init, objectUnderTest } from '@tests/test-base';
import AuthService from './auth.service';

describe('AuthService', () => {
  init(AuthService);

  beforeEach(() => {
    localStorage.clear();

    expect(localStorage.getItem('access_token')).toBe(null);
    expect(localStorage.getItem('expires_at')).toBe(null);
    expect(localStorage.getItem('id_token')).toBe(null);
  });

  describe('isAuthenticated', () => {
    it('should return true when `expires_at` local storage value is in the future', () => {
      localStorage.setItem(
        'expires_at',
        moment()
          .add('1', 'm')
          .valueOf()
          .toString()
      );
      objectUnderTest.isAuthenticated().should.equal(true);
    });

    it('should return false when `expires_at` local storage value is right now', () => {
      localStorage.setItem(
        'expires_at',
        moment()
          .valueOf()
          .toString()
      );
      objectUnderTest.isAuthenticated().should.equal(false);
    });

    it('should return false when `expires_at` local storage value is in the past', () => {
      localStorage.setItem(
        'expires_at',
        moment()
          .subtract('1', 'm')
          .valueOf()
          .toString()
      );
      objectUnderTest.isAuthenticated().should.equal(false);
    });

    it('should return false when `expires_at` local storage value is not set', () => {
      objectUnderTest.isAuthenticated().should.equal(false);
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      localStorage.setItem('access_token', 'Access Token');
      localStorage.setItem('id_token', 'ID Token');
      localStorage.setItem('expires_at', 'Expires At');

      objectUnderTest.logout(jest.fn());
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

  describe('setSession', () => {
    const authResult = {
      accessToken: 'Access Token',
      expiresIn: '100',
      idToken: 'ID Token'
    };

    beforeEach(() => {
      objectUnderTest.setSession(authResult);
    });

    it('should set `access_token` in local storage', () => {
      expect(localStorage.getItem('access_token')).toBe('Access Token');
    });

    it('should set `expires_at` in local storage', () => {
      expect(localStorage.getItem('expires_at')).not.toBe(null);
    });

    it('should set `id_token` in local storage', () => {
      expect(localStorage.getItem('id_token')).toBe('ID Token');
    });
  });
});
