import { browserHistory } from 'react-router';
import axios from 'axios';
// import { Firsts } from '../utils/api';

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
      const { data } = await axios.get(`/firsts/${userId}`);
      console.log('Data from axios get firsts', data);
      dispatch(getFirstsSuccess(data));
    } catch (e) {
      return dispatch(getFirstsError(e));
    }
    return browserHistory.push('/timeline');
  };
}

export const ADD_FIRST = 'ADD_FIRST';
export const ADD_FIRST_SUCCESS = 'ADD_FIRST_SUCCESS';
export const ADD_FIRST_ERROR = 'ADD_FIRST_ERROR';

function addFirstsSuccess(firsts) {
  return {
    type: ADD_FIRST_SUCCESS,
    firsts,
  };
}

function addFirstsError(error) {
  return {
    type: ADD_FIRST_ERROR,
    error,
  };
}

export function addFirsts(first) {
  return async dispatch => {
    dispatch({ type: ADD_FIRST });
    console.log('REACHED HERE');
    try {
      const { data } = await axios.post('/firsts', first);
      console.log('Data from axios first post', data);
      dispatch(addFirstsSuccess(data));
    } catch (e) {
      return dispatch(addFirstsError(e));
    }
    return browserHistory.push('/timeline');
  };
}
