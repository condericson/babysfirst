import {
  GET_FIRSTS,
  GET_FIRSTS_SUCCESS,
  GET_FIRSTS_ERROR,
  ADD_FIRST,
  ADD_FIRST_SUCCESS,
  ADD_FIRST_ERROR,
} from '../actions/firsts';

const initialState = {
  firsts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRSTS:
      return {
        ...state,
        loading: true,
      };
    case GET_FIRSTS_SUCCESS:
      return {
        ...state,
        firsts: action.firsts,
        loading: false,
      };
    case GET_FIRSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_FIRST:
      return {
        ...state,
        loading: true,
      };
    case ADD_FIRST_SUCCESS:
      return {
        ...state,
        firsts: action.firsts,
        loading: false,
      };
    case ADD_FIRST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
