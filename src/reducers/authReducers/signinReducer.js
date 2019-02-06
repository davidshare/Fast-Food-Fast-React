import {
  START_SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  AUTHENTICATE,
  SIGNOUT,
} from '../../actions/authActions/authActionTypes';
import stateUpdateHelper from '../../helpers/updateStateHelper';

export const initialState = {
  signinProcessing: false,
  signinResponse: null,
  signinError: false,
  signinSuccess: false,
  authenticated: false,
};

/**
 * @description - signin start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
export const signinStartReducer = state => stateUpdateHelper(state,
  { signinProcessing: true, signinError: false });

/**
 * @description - function to set authenticated state
 * @param {object} state
 * @returns {object} - updated state
 */
export const authenticateUser = state => stateUpdateHelper(state,
  { authenticated: true });

/**
 * @description - function to signout a user
 * @param {object} state
 * @returns {object} - updated state
 */
export const signOutUser = (state) => {
  localStorage.removeItem('token');
  return stateUpdateHelper(state, { authenticated: false });
};

/**
 * @description - siginin failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const signinFailureReducer = (
  state, action,
) => stateUpdateHelper(state, {
  signinProcessing: false,
  signinError: true,
  signinSuccess: false,
  signinResponse: action.payload,
  authenticated: false,
});

/**
 * @description - Signin success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const signinSuccessReducer = (
  state,
  action,
) => stateUpdateHelper(state, {
  signinProcessing: false,
  signinSuccess: true,
  authenticated: true,
  signinResponse: action.payload,
});
const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SIGNIN:
      return signinStartReducer(state);
    case SIGNOUT:
      return signOutUser(state);
    case AUTHENTICATE:
      return authenticateUser(state);
    case SIGNIN_FAILURE:
      return signinFailureReducer(state, action);
    case SIGNIN_SUCCESS:
      return signinSuccessReducer(state, action);
    default: return state;
  }
};

export default signinReducer;
