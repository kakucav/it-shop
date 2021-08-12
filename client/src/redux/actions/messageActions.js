import { SHOW_SUCCESS_MESSAGE, SHOW_ERROR_MESSAGE, CLEAR_MESSAGES } from '../constants/messageConstants';

const setSuccessMessage = (data) => (dispatch) => {
  dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: data });
};

const setErrorMessage = (data) => (dispatch) => {
  dispatch({ type: SHOW_ERROR_MESSAGE, payload: data });
};

const clearMessages = () => (dispatch) => {
  dispatch({ type: CLEAR_MESSAGES });
};

export { setSuccessMessage, setErrorMessage, clearMessages };
