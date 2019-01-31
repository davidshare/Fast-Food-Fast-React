import axios from 'axios';

import {
  START_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from './authActionTypes';
import { SERVER_API_URL } from '../../helpers/pageUrls';

export const startSignupAction = () => ({ type: START_SIGNUP });

export const signupSuccessAction = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailureAction = payload => ({
  type: SIGNUP_FAILURE,
  payload,
});

/**
 * @description - action to signup a user
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {undefine} - dispatches functions
 */
export const signupUser = (user, history) => async (dispatch) => {
  dispatch(startSignupAction());
  try {
    const response = await axios.post(`${SERVER_API_URL}/auth/signup`,
      { ...user });
    localStorage.setItem('token', response.data.token);
    dispatch(signupSuccessAction(response.data));
    history.push('/signin');
  } catch (err) {
    dispatch(signupFailureAction(err));
  }
};
