import { GET_CATEGORIES, CREATE_CATEGORY } from '../constants/categoryConstants';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.payload,
      };
    case CREATE_CATEGORY:
      return {
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
};

export default categoryReducer;
