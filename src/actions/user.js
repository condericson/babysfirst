import { browserHistory } from 'react-router';

import { User } from '../utils/api';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_INCORRECT_INFO = 'LOGIN_INCORRECT_INFO';

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

export function loginIncorrectInfo(message) {
  return {
    type: LOGIN_INCORRECT_INFO,
    message,
  };
}

export function login(user) {
  return async dispatch => {
    dispatch({ type: LOGIN });
    try {
      const response = await User.login(user);
      if (response.response) {
        dispatch(loginIncorrectInfo(response.response.data.message));
      } else {
        dispatch(loginSuccess(response));
        return browserHistory.push('/timeline');
      }
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
export const SIGNUP_INCORRECT_INFO = 'SIGNUP_INCORRECT_INFO';

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

export function signupIncorrectInfo(message) {
  return {
    type: SIGNUP_INCORRECT_INFO,
    message,
  };
}

export function signup(user) {
  return async dispatch => {
    dispatch({ type: SIGNUP });
    try {
      const response = await User.signup(user);
      if (response.response) {
        dispatch(signupIncorrectInfo(response.response.data.message));
      } else {
        dispatch(signupSuccess(response));
        return browserHistory.push('/timeline');
      }
    } catch (e) {
      return dispatch(signupError(e));
    }
  };
}
