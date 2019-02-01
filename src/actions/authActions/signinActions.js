import axios from 'axios';

import {
  START_SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
} from './authActionTypes';
import { SERVER_API_URL } from '../../helpers/pageUrls';

export const startSigninAction = () => ({ type: START_SIGNIN });

export const signinSuccessAction = payload => ({
  type: SIGNIN_SUCCESS,
  payload,
});

export const signinFailureAction = payload => ({
  type: SIGNIN_FAILURE,
  payload,
});

/**
 * @description - action to signup a user
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {undefine} - dispatches functions
 */
export const signinUser = (user, history) => async (dispatch) => {
  dispatch(startSigninAction());
  try {
    const response = await axios.post(`${SERVER_API_URL}/auth/login`,
      { ...user });
    localStorage.setItem('token', response.data.token);
    dispatch(signinSuccessAction(response.data));
    history.push('/');
  } catch (err) {
    dispatch(signinFailureAction(err));
  }
};
