import { CREATE_PRODUCT, GET_PRODUCTS } from '../constants/productConstants';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
