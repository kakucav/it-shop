import axios from 'axios';

const createCategory = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post('/api/category', data, config);

  return response;
};

const getCategories = async () => {
  const response = await axios.get('/api/category');

  return response;
};

export { createCategory, getCategories };
