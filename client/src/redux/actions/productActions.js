import axios from 'axios';

import { CREATE_PRODUCT, GET_PRODUCTS } from '../constants/productConstants';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import { setErrorMessage, setSuccessMessage } from './messageActions';

const createProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post('/api/product', data);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: CREATE_PRODUCT, payload: response.data.product });
    dispatch(setSuccessMessage(response.data.successMessage));
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    dispatch(setErrorMessage(error.response.data.errorMessage));
  }
};

const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get('/api/product');
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_PRODUCTS, payload: response.data.products });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    dispatch(setErrorMessage(error.response.data.errorMessage));
  }
};

export { createProduct, getProducts };
