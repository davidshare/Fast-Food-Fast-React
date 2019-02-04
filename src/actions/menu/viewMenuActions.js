import axios from 'axios';

import {
  START_MENU_FETCH,
  MENU_FETCH_SUCCESS,
  MENU_FETCH_FAILURE,
} from './menuActionTypes';
import { SERVER_API_URL } from '../../helpers/pageUrls';

export const startMenuFetchAction = () => ({ type: START_MENU_FETCH });

export const fetchMenuSuccessAction = payload => ({
  type: MENU_FETCH_SUCCESS,
  payload: payload.menu,
});

export const fetchMenuFailureAction = payload => ({
  type: MENU_FETCH_FAILURE,
  payload,
});

/**
 * @description - action to fetch menu a user
 * @returns {undefine} - dispatches functions
 */
export const fetchMenu = () => async (dispatch) => {
  dispatch(startMenuFetchAction());
  try {
    const response = await axios.get(`${SERVER_API_URL}/menu`);
    dispatch(fetchMenuSuccessAction(response.data));
  } catch (err) {
    dispatch(fetchMenuFailureAction(err));
  }
};
