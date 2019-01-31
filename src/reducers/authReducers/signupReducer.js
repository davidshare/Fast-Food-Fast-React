import {
  START_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../../actions/authActions/authActionTypes';
import stateUpdateHelper from '../../helpers/updateStateHelper';

export const initialState = {
  signupProcessing: false,
  signupResponse: null,
  signupError: false,
  signupSuccess: false,
};

/**
 * @description - Signup start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
export const signupStartReducer = state => stateUpdateHelper(state,
  { signupProcessing: true, signupError: false });

/**
 * @description - Signup failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const signupFailureReducer = (
  state, action,
) => stateUpdateHelper(state, {
  signupProcessing: false,
  signupError: true,
  signupSuccess: true,
  response: action.payload,
});

/**
 * @description - Signup success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
export const signupSucessReducer = (state, action) => stateUpdateHelper(state, {
  signupProcessing: false,
  signupSuccess: true,
  signupResponse: action.payload,
});
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SIGNUP:
      return signupStartReducer(state);
    case SIGNUP_FAILURE:
      return signupFailureReducer(state, action);
    case SIGNUP_SUCCESS:
      return signupSucessReducer(state, action);
    default: return state;
  }
};

export default signupReducer;
