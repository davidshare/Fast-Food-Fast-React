import viewMenuReducer, {
  initialState as defaultState,
} from '../../src/reducers/menuReducers/viewMenuReducer';
import * as menuActionTypes
  from '../../src/actions/menu/menuActionTypes';
import stateUpdateHelper from '../../src/helpers/updateStateHelper';

describe('placeOrder Reducer', () => {
  it(`should update state when ${
    menuActionTypes.START_MENU_FETCH
  } is triggered`,
  () => {
    expect(viewMenuReducer(defaultState,
      { type: menuActionTypes.START_MENU_FETCH })).toEqual(
      stateUpdateHelper(defaultState, {
        fetchingMenu: true,
      }),
    );
  });

  it(`should update state when ${
    menuActionTypes.MENU_FETCH_SUCCESS} is triggered`,
  () => {
    expect(viewMenuReducer(
      defaultState,
      { type: menuActionTypes.MENU_FETCH_SUCCESS, payload: 'success' },
    )).toEqual(
      stateUpdateHelper(defaultState, {
        fetchingMenu: false,
        fetchMenuSuccess: true,
        fetchMenuResponse: 'success',
      }),
    );
  });

  it(`should update state when ${
    menuActionTypes.MENU_FETCH_FAILURE} is triggered`,
  () => {
    expect(viewMenuReducer(
      defaultState,
      { type: menuActionTypes.MENU_FETCH_FAILURE, payload: 'failure' },
    )).toEqual(
      stateUpdateHelper(defaultState, {
        fetchingMenu: false,
        fetchMenuError: true,
        fetchMenuResponse: 'failure',
      }),
    );
  });


  it('should return default state when nothing is triggered', () => {
    expect(viewMenuReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });
});
