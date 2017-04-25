import {
  GET_FIRSTS,
  GET_FIRSTS_SUCCESS,
  GET_FIRSTS_ERROR,
  LOAD_MORE,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_ERROR,
  ADD_FIRST,
  ADD_FIRST_SUCCESS,
  ADD_FIRST_ERROR,
  NO_MORE_FIRSTS,
  DELETE_FIRST,
  DELETE_FIRST_SUCCESS,
  DELETE_FIRST_ERROR,
} from '../actions/firsts';

const initialState = {
  firsts: [],
  loading: false,
  errorMessage: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRSTS:
      return initialState;
    case GET_FIRSTS_SUCCESS:
      return {
        ...state,
        firsts: [...action.firsts],
        loading: false,
        noMore: false,
      };
    case GET_FIRSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOAD_MORE:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        firsts: [...state.firsts, ...action.firsts],
        loading: false,
      };
    case LOAD_MORE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case NO_MORE_FIRSTS:
      return {
        ...state,
        noMore: true,
        error: action.error,
      };
    case ADD_FIRST:
      return {
        ...state,
        loading: true,
        errorMessage: false,
      };
    case ADD_FIRST_SUCCESS:
      return {
        ...state,
        firsts: action.firsts,
        loading: false,
        errorMessage: false,
      };
    case ADD_FIRST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        errorMessage: true,
      };
    case DELETE_FIRST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FIRST_SUCCESS:
      const firstId = action.data._id;
      const firsts = state.firsts.filter((first) => first._id !== firstId);
      return {
        ...state,
        firsts,
        loading: false,
      };
    case DELETE_FIRST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
