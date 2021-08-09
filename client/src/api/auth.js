import axios from 'axios';

const register = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post('/api/auth/register', data, config);

  return response;
};

const login = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post('/api/auth/login', data, config);

  return response;
};

export { register, login };
