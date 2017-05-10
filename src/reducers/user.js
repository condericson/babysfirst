import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_INCORRECT_INFO,
  LOGOUT,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_INCORRECT_INFO,
} from '../actions/user';

const initialState = {
  loading: false,
  currentUserId: null,
  logged: false,
  error: null,
  signupError: null,
  loginError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUserId: action.user._id,
        currentUserBirthday: action.user.birthday,
        logged: true,
        signupError: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginError: action,
      };
    case LOGIN_INCORRECT_INFO:
      return {
        ...state,
        loading: false,
        loginError: action.message,
      };
    case LOGOUT:
      return initialState;
    case SIGNUP:
      return {
        ...state,
        loading: true,
        signupError: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUserId: action.user._id,
        currentUserBirthday: action.user.birthday,
        logged: true,
        signupError: null,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        signupError: action.error,
      };
    case SIGNUP_INCORRECT_INFO:
      return {
        ...state,
        loading: false,
        signupError: action.message,
      };
    default:
      return state;
  }
};
