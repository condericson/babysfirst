import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from '../actions/user';

const initialState = {
  loading: false,
  currentUserId: null,
  logged: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUserId: action.user._id,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOGOUT:
      return initialState;
    case SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUserId: action.user._id,
        logged: true,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        logged: true,
      };
    default:
      return state;
  }
};
