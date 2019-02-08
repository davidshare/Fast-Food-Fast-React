import orderReducer, {
  initialState as defaultState,
} from '../../src/reducers/orders/orderReducer';
import * as orderActionTypes
  from '../../src/actions/orders/orderActionTypes';
import stateUpdateHelper from '../../src/helpers/updateStateHelper';

describe('placeOrder Reducer', () => {
  it(`should update state when ${
    orderActionTypes.START_PLACE_ORDER
  } is triggered`,
  () => {
    expect(orderReducer(defaultState,
      { type: orderActionTypes.START_PLACE_ORDER })).toEqual(
      stateUpdateHelper(defaultState, {
        placingOrder: true,
      }),
    );
  });

  it(`should update state when ${
    orderActionTypes.PLACE_ORDER_SUCCESS} is triggered`,
  () => {
    expect(orderReducer(
      defaultState,
      { type: orderActionTypes.PLACE_ORDER_SUCCESS, payload: 'success' },
    )).toEqual(
      stateUpdateHelper(defaultState, {
        placingOrder: false,
        placeOrderSuccess: true,
        placeOrderResponse: 'success',
      }),
    );
  });

  it(`should update state when ${
    orderActionTypes.PLACE_ORDER_FAILURE} is triggered`,
  () => {
    expect(orderReducer(
      defaultState,
      { type: orderActionTypes.PLACE_ORDER_FAILURE, payload: 'failure' },
    )).toEqual(
      stateUpdateHelper(defaultState, {
        placingOrder: false,
        placeOrderSuccess: false,
        placeOrderError: true,
        placeOrderResponse: 'failure',
      }),
    );
  });


  it('should return default state when nothing is triggered', () => {
    expect(orderReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });
});
