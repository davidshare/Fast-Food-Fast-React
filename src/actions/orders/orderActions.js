import axios from 'axios';

import {
  START_PLACE_ORDER,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from './orderActionTypes';
import { SERVER_API_URL } from '../../helpers/pageUrls';
import { getToken } from '../../helpers/authHelpers';

export const startPlaceOrderAction = () => ({ type: START_PLACE_ORDER });

export const placeOrderSuccessAction = payload => ({
  type: PLACE_ORDER_SUCCESS,
  payload,
});

export const placeOrderFailureAction = payload => ({
  type: PLACE_ORDER_FAILURE,
  payload,
});

/**
 * @description - action to fetch menu a user
 * @returns {undefine} - dispatches functions
 * @param { object } orderObject
 */
export const placeOrder = orderObject => async (dispatch) => {
  dispatch(startPlaceOrderAction());
  try {
    const response = await axios.post(`${SERVER_API_URL}/orders`, {
      ...orderObject,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-access': getToken(),
      },
    });
    dispatch(placeOrderSuccessAction(response.data));
  } catch (err) {
    dispatch(placeOrderFailureAction(err));
  }
};
