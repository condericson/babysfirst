import {
  GET_FIRSTS,
  GET_FIRSTS_SUCCESS,
  GET_FIRSTS_ERROR,
  ADD_FIRST,
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
        userId: action.userId,
        date: action.date,
        content: action.content,
        image: action.image,
      };

    default:
      return state;
  }
};
