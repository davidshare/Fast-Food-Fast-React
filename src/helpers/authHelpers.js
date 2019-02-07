import jwt from 'jsonwebtoken';

export const getToken = () => localStorage.getItem('token');

export const setToken = token => localStorage.setItem('token', token);

export const authenticatedUser = () => {
  jwt.verify(getToken(), 'ijoijer902930kwlklad', (error, decoded) => {
    if (error) return false;
    return decoded;
  });
};
