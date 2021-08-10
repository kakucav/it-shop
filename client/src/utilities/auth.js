import { setCookie, getCookie, deleteCookie } from './cookies';
import { setLocalStorage, getLocalStorage, deleteLocalStorage } from './localStorage';

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

const logout = (next) => {
  deleteCookie('token');
  deleteLocalStorage('user');

  next();
};

export { setAuthentication, isAuthenticated, logout };
