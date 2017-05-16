import { browserHistory } from 'react-router';
import axios from 'axios';
// import { Firsts } from '../utils/api';

export const GET_FIRSTS = 'GET_FIRSTS';
export const GET_FIRSTS_SUCCESS = 'GET_FIRSTS_SUCCESS';
export const GET_FIRSTS_ERROR = 'GET_FIRSTS_ERROR';

export function getFirstsSuccess(firsts) {
  return {
    type: GET_FIRSTS_SUCCESS,
    firsts,
  };
}

export function getFirstsError(error) {
  return {
    type: GET_FIRSTS_ERROR,
    error,
  };
}

export function getFirsts(userId, offset) {
  return async dispatch => {
    dispatch({ type: GET_FIRSTS });
    try {
      const { data } = await axios.get(
        `/firsts/${userId}?offset=${offset || 0}`,
      );
      dispatch(getFirstsSuccess(data));
    } catch (e) {
      return dispatch(getFirstsError(e));
    }
    return browserHistory.push('/timeline');
  };
}

export const LOAD_MORE = 'LOAD_MORE';
export const LOAD_MORE_SUCCESS = 'LOAD_MORE_SUCCESS';
export const LOAD_MORE_ERROR = 'LOAD_MORE_ERROR';
export const NO_MORE_FIRSTS = 'NO_MORE_FIRSTS';

export function loadMoreSuccess(firsts) {
  return {
    type: LOAD_MORE_SUCCESS,
    firsts,
    noMore: false,
  };
}

function loadMoreError(error) {
  return {
    type: LOAD_MORE_ERROR,
    error,
  };
}

function noMoreFirsts() {
  return {
    type: NO_MORE_FIRSTS,
    noMore: true,
  };
}

export function loadMore(userId, offset) {
  return async dispatch => {
    dispatch({ type: LOAD_MORE });
    try {
      const { data } = await axios.get(
        `/firsts/${userId}?offset=${offset || 0}`,
      );
      if (data.length === 0) {
        dispatch(noMoreFirsts(data));
      } else {
        dispatch(loadMoreSuccess(data));
      }
    } catch (e) {
      return dispatch(loadMoreError(e));
    }
    return browserHistory.push('/timeline');
  };
}

export const ADD_FIRST = 'ADD_FIRST';
export const ADD_FIRST_SUCCESS = 'ADD_FIRST_SUCCESS';
export const ADD_FIRST_ERROR = 'ADD_FIRST_ERROR';

export function addFirstsSuccess(first) {
  return {
    type: ADD_FIRST_SUCCESS,
    first: first,
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
    try {
      const { data } = await axios.post('/firsts', first);
      //worked up to here....
      console.log('add first data', data);
      dispatch(addFirstsSuccess(data));
    } catch (e) {
      return dispatch(addFirstsError(e));
    }
    return browserHistory.push('/timeline');
  };
}

export const DELETE_FIRST = 'DELETE_FIRST';
export const DELETE_FIRST_SUCCESS = 'DELETE_FIRST_SUCCESS';
export const DELETE_FIRST_ERROR = 'DELETE_FIRST_ERROR';

export function deleteFirstsSuccess() {
  return {
    type: DELETE_FIRST_SUCCESS,
  };
}

function deleteFirstsError(error) {
  return {
    type: DELETE_FIRST_ERROR,
    error,
  };
}

export function deleteFirsts(firstId) {
  return async dispatch => {
    dispatch({ type: DELETE_FIRST });
    try {
      const { data } = await axios.delete(`/firsts/${firstId}`);
      console.log('this is action', data);
      dispatch(deleteFirstsSuccess());
      return browserHistory.push('/timeline');
    } catch (e) {
      return dispatch(deleteFirstsError(e));
    }
  };
}
