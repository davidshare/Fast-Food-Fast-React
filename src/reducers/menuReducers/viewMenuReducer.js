import {
  START_MENU_FETCH,
  MENU_FETCH_FAILURE,
  MENU_FETCH_SUCCESS,
} from '../../actions/menu/menuActionTypes';

import stateUpdateHelper from '../../helpers/updateStateHelper';

export const initialState = {
  fetchingMenu: false,
  fetchMenuResponse: [],
  fetchMenuError: false,
  fetchMenuSuccess: false,
};

/**
 * @description - method to start fetching the menu
 * @param {object} state
 * @returns {object} - updated state
 */
export const fetchMenuStartReducer = state => stateUpdateHelper(
  state, { fetchingMenu: true, fetchMenuError: false },
);

/**
 * @description - fetch menu failure
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const fetchMenuFailureReducer = (
  state, action,
) => stateUpdateHelper(state, {
  fetchingMenu: false,
  fetchMenuResponse: action.payload,
  fetchMenuError: true,
  fetchMenuSuccess: false,
});

/**
 * @description - fetch menu success -
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const fetchMenuSuccessReducer = (
  state, action,
) => stateUpdateHelper(state, {
  fetchingMenu: false,
  fetchMenuResponse: action.payload,
  fetchMenuError: false,
  fetchMenuSuccess: true,
});

const fetchMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_MENU_FETCH:
      return fetchMenuStartReducer(state);
    case MENU_FETCH_FAILURE:
      return fetchMenuFailureReducer(state, action);
    case MENU_FETCH_SUCCESS:
      return fetchMenuSuccessReducer(state, action);
    default: return state;
  }
};

export default fetchMenuReducer;
