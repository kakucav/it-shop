import axios from 'axios';

import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { CREATE_CATEGORY, GET_CATEGORIES } from '../constants/categoryConstants';
import { setSuccessMessage, setErrorMessage } from './messageActions';

const createCategory = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post('/api/category', data, config);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: CREATE_CATEGORY, payload: response.data.category });
    dispatch(setSuccessMessage(response.data.successMessage));
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    console.log(error.response);
    dispatch(setErrorMessage(error.response.data.errorMessage));
  }
};

const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get('/api/category');
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_CATEGORIES, payload: response.data.categories });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    dispatch(setErrorMessage(error.response.data.errorMessage));
  }
};

export { createCategory, getCategories };
