import moxios from 'moxios';

import * as orderActions
  from '../../src/actions/orders/orderActions';
import * as orderActionTypes
  from '../../src/actions/orders/orderActionTypes';
import { SERVER_API_URL } from '../../src/helpers/pageUrls';

const dispatch = jest.fn();
const fakeOrderObject = {
  recipientEmail: 'davidessien@gmail.com',
  recipientAddress: 'gemshare',
  recipientPhoneNumber: '0990090090',
  firstName: 'david',
  lastName: 'essien',
  item: [
    {
      item: 'rice and beans',
      price: 3000,
      quantity: 3,
    },
  ],
};

const mockResponse = {
  response: {
    response: {
      data: { message: 'some response' },
    },
  },
};

describe('Place order actions ', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an action if START_PLACE_ORDER is triggerd', () => {
    expect(orderActions.startPlaceOrderAction()).toEqual({
      type: orderActionTypes.START_PLACE_ORDER,
    });
  });

  it('should return an action if PLACE_ORDER_SUCCESS is triggerd', () => {
    expect(orderActions.placeOrderSuccessAction()).toEqual({
      type: orderActionTypes.PLACE_ORDER_SUCCESS,
    });
  });

  it('should return an action if PLACE_ORDER_FAILURE is triggerd', () => {
    expect(orderActions.placeOrderFailureAction(mockResponse)).toEqual({
      type: orderActionTypes.PLACE_ORDER_FAILURE,
      payload: mockResponse,
    });
  });

  it('should call the signin dispatch function', async () => {
    moxios.stubRequest(`${SERVER_API_URL}/orders`, mockResponse);
    await orderActions.placeOrder(fakeOrderObject)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: orderActionTypes.START_PLACE_ORDER,
    });
  });
});
