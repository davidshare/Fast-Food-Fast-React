import {
  START_PLACE_ORDER,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from '../../actions/orders/orderActionTypes';
import stateUpdateHelper from '../../helpers/updateStateHelper';

export const initialState = {
  placingOrder: false,
  placeOrderResponse: null,
  placeOrderSuccess: false,
  placeOrderError: false,
};

/**
 * @description - placeOrder start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
export const startPlaceOrderReducer = state => stateUpdateHelper(state,
  { placingOrder: true, placeOrderError: false });

/**
 * @description - place order failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const placeOrderFailureReducer = (
  state, action,
) => stateUpdateHelper(state, {
  placingOrder: false,
  placeOrderError: true,
  placeOrderSuccess: false,
  placeOrderResponse: action.payload,
});

/**
 * @description - Signup success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const placeOrderSuccesReducer = (
  state,
  action,
) => stateUpdateHelper(state, {
  placingOrder: false,
  placeOrderError: false,
  placeOrderSuccess: true,
  placeOrderResponse: action.payload,
});
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PLACE_ORDER:
      return startPlaceOrderReducer(state);
    case PLACE_ORDER_FAILURE:
      return placeOrderFailureReducer(state, action);
    case PLACE_ORDER_SUCCESS:
      return placeOrderSuccesReducer(state, action);
    default: return state;
  }
};

export default orderReducer;
