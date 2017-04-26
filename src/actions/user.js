import { browserHistory } from 'react-router';

import { User } from '../utils/api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function login(user) {
  return async dispatch => {
    dispatch({ type: LOGIN });
    try {
      const response = await User.login(user);
      dispatch(loginSuccess(response));
      return browserHistory.push('/timeline');
    } catch (e) {
      return dispatch(loginError(e));
    }
  };
}

export const LOGOUT = 'LOGOUT';

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}

export function signup(user) {
  return async dispatch => {
    dispatch({ type: SIGNUP });
    try {
      await dispatch(signupSuccess(await User.signup(user)));
      return browserHistory.push('/timeline');
    } catch (e) {
      return dispatch(signupError(e));
    }
  };
}
