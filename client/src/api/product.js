import axios from 'axios';

const createProduct = async (data) => {
  const response = await axios.post('/api/product', data);

  return response;
};

export { createProduct };
