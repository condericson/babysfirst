import {
  LOGGING,
  LOGOUT,
} from '../actions/user';

const initialState = {
  currentUserId: null,
  logged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGING:
      return {
        currentUserId: action.userId,
        logged: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
