import moxios from 'moxios';

import * as viewMenuActions
  from '../../src/actions/menu/viewMenuActions';
import * as menuActionTypes
  from '../../src/actions/menu/menuActionTypes';
import { SERVER_API_URL } from '../../src/helpers/pageUrls';

const dispatch = jest.fn();

const mockResponse = {
  response: {
    response: {
      data: {
        message: 'some response',
        menu: {},
      },
    },
  },
  payload: {
    menu: {},
  },
};

describe('View menu actions ', () => {
  it('should return an action if START_MENU_FETCH is triggerd', () => {
    expect(viewMenuActions.startMenuFetchAction()).toEqual({
      type: menuActionTypes.START_MENU_FETCH,
    });
  });

  it('should return an action if MENU_FETCH_SUCCESS is triggerd', () => {
    expect(viewMenuActions.fetchMenuSuccessAction(mockResponse)).toEqual({
      type: menuActionTypes.MENU_FETCH_SUCCESS,
    });
  });

  it('should return an action if MENU_FETCH_FAILURE is triggerd', () => {
    expect(viewMenuActions.fetchMenuFailureAction()).toEqual({
      type: menuActionTypes.MENU_FETCH_FAILURE,
    });
  });

  it('should call the signin dispatch function', async () => {
    moxios.stubRequest(`${SERVER_API_URL}/menu`, mockResponse);
    await viewMenuActions.fetchMenu()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: menuActionTypes.START_MENU_FETCH,
    });
  });
});
