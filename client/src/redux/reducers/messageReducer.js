import { SHOW_SUCCESS_MESSAGE, SHOW_ERROR_MESSAGE, CLEAR_MESSAGES } from '../constants/messageConstants';

const initialState = {
  successMessage: '',
  errorMessage: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
      };
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case CLEAR_MESSAGES:
      return {
        successMessage: '',
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default messageReducer;
