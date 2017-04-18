import { browserHistory } from 'react-router';

import { Firsts } from '../utils/api';

export const GET_FIRSTS = 'GET_FIRSTS';
export const GET_FIRSTS_SUCCESS = 'GET_FIRSTS_SUCCESS';
export const GET_FIRSTS_ERROR = 'GET_FIRSTS_ERROR';

function getFirstsSuccess(firsts) {
  return {
    type: GET_FIRSTS_SUCCESS,
    firsts,
  };
}

function getFirstsError(error) {
  return {
    type: GET_FIRSTS_ERROR,
    error,
  };
}

export function getFirsts(userId) {
  return async dispatch => {
    dispatch({ type: GET_FIRSTS });
    try {
      const response = await Firsts.getFirsts(userId);
      console.log(response);
      if (response instanceof Error) {
        console.log(response);
        return dispatch(getFirstsError(response));
      }
      await dispatch(getFirstsSuccess(response));
    } catch (e) {
      return dispatch(getFirstsError(e));
    }
    return browserHistory.push('/timeline');
  };
}
