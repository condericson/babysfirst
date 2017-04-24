jest.mock('../../utils/api');

import {
  loginSuccess,
  loginError,
  logout,
  login,
  signupError,
  signupSuccess,
  signup,
} from '../user';
import mockStore from '../../utils/mockstore';
import * as API from '../../utils/api';

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
    it('Should return payload and type of LOGIN and LOGIN_SUCCESS', () => {
      const payload = {
        userId: '123',
        birthday: '01-02-2020',
        password: 'password',
      };
      console.log(API.default.User.mockImplementation);
      API.default.User.mockImplementation(() => payload);
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
  // describe('#signupSuccess()', () => {
  //   it('Should return user and type of SIGNUP_SUCCESS', () => {
  //     const expected = {
  //       type: 'SIGNUP_SUCCESS',
  //       user: {
  //         name: 'test',
  //       },
  //     };
  //     const user = {
  //       name: 'test',
  //     };
  //     expect(signupSuccess(user)).toEqual(expected);
  //   });
  // });
  // describe('#signupError()', () => {
  //   it('Should return error and type of SIGNUP_ERROR', () => {
  //     const expected = {
  //       type: 'SIGNUP_ERROR',
  //       error: {
  //         message: 'error',
  //       },
  //     };
  //     const error = {
  //       message: 'error',
  //     };
  //     expect(signupError(error)).toEqual(expected);
  //   });
  // });
  // describe('#signup()', () => {
  //   const store = mockStore({});
  //   it('Should return payload and type of SIGNUP and SIGNUP_SUCCESS', () => {
  //     const payload = {
  //       userId: '123',
  //       birthday: '01-02-2020',
  //       password: 'password',
  //     };
  //     User.signup.mockImplementation(() => payload);
  //     const expectedActions = [
  //       { type: 'SIGNUP' },
  //       { type: 'SIGNUP_SUCCESS', payload },
  //     ];
  //     return store.dispatch(signup())
  //       .then(() => {
  //         expect(store.getActions()).toEqual(expectedActions);
  //       });
  //   });
  // });
});
