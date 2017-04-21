import { loginSuccess, loginError, logout, login } from '../user';
import mockStore from '../../utils/mockstore';
import { User } from '../../utils/api';

jest.mock('../../utils/api').User;

describe('user actions', () => {
  describe('#loginSuccess()', () => {
    it('Should return user and type of LOGIN_SUCCESS', () => {
      const expected = {
        type: 'LOGIN_SUCCESS',
        user: {
          name: 'test',
        },
      };
      const user = {
        name: 'test',
      };
      expect(loginSuccess(user)).toEqual(expected);
    });
  });
  describe('#loginError()', () => {
    it('Should return error and type of LOGIN_ERROR', () => {
      const expected = {
        type: 'LOGIN_ERROR',
        error: {
          message: 'error',
        },
      };
      const error = {
        message: 'error',
      };
      expect(loginError(error)).toEqual(expected);
    });
  });
  describe('#logout()', () => {
    it('Should return type of LOGIN_ERROR', () => {
      const expected = {
        type: 'LOGOUT',
      };
      expect(logout()).toEqual(expected);
    });
  });
  describe('#login()', () => {
    const store = mockStore({});
    it('Should', () => {
      const payload = {
        userId: '123',
        birthday: '01-02-2020',
        password: 'password',
      };
      User.login.mockImplementation(() => payload);
      const expectedActions = [
        { type: 'LOGIN' },
        { type: 'LOGIN_SUCCESS', payload },
      ];
      return store.dispatch(login())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
