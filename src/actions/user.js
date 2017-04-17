import { browserHistory } from 'react-router';

import { User } from '../utils/api';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(userId) {
  return {
    type: LOGIN,
    userId,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

function signupSuccess(user) {
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
