import { CREATE_CATEGORY, GET_CATEGORIES } from '../constants/categoryConstants';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        categories: [...state.categories, action.payload],
      };
    case GET_CATEGORIES:
      return {
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
