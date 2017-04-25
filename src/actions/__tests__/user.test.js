import nock from 'nock';
import mockStore from '../../utils/mockstore';

import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

jest.mock('../../utils/api');

import { User } from '../../utils/api';
import * as userActions from '../user';

describe('user actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('#loginSuccess()', () => {
    it('Should return user and type of LOGIN_SUCCESS', () => {
      const user = {
        name: 'test',
      };
      console.log(userActions.LOGIN);
      console.log(userActions.loginError);

      nock('http://localhost.com/8080')
        .post('/users/login')
        .reply(200, { body: user });

      const expectedActions = [
      { type: userActions.LOGIN },
      { type: userActions.LOGIN_SUCCESS, body: user },
      ];

      const store = mockStore({ user });

      return store.dispatch(userActions.login())
      .then(() => {
        expectedActions(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

const host = 'http://localhost';

axios.defaults.baseURL = '';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('user actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
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
    it('Should return payload and type of LOGIN and LOGIN_SUCCESS', async () => {
      const payload = {
        userId: '123',
        birthday: '01-02-2020',
        password: 'password',
      };

      nock(host).post('/users').reply(200, payload);

      const { data } = await axios.post('/users');

      const expectedActions = [
        { type: 'LOGIN' },
        { type: 'LOGIN_SUCCESS', payload: data },
      ];
      return store.dispatch(login()).then(() => {
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
