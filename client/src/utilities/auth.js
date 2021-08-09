import { setCookie, getCookie } from './cookies';
import { setLocalStorage, getLocalStorage } from './localStorage';

const setAuthentication = (token, user) => {
  setCookie('token', token);
  setLocalStorage('user', user);
};

const isAuthenticated = () => {
  if (getCookie('token') && getLocalStorage('user')) {
    return getLocalStorage('user');
  } else {
    return false;
  }
};

export { setAuthentication, isAuthenticated };
