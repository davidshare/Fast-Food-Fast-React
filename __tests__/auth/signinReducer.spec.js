import signinReducer, {
  initialState as defaultState, authenticateUser, signOutUser,
} from '../../src/reducers/authReducers/signinReducer';
import * as authActionTypes
  from '../../src/actions/authActions/authActionTypes';
import stateUpdateHelper from '../../src/helpers/updateStateHelper';

describe('Signin Reducer', () => {
  it(`should update state when ${authActionTypes.START_SIGNIN} is triggered`,
    () => {
      expect(signinReducer(defaultState,
        { type: authActionTypes.START_SIGNIN })).toEqual(
        stateUpdateHelper(defaultState, {
          signinProcessing: true,
        }),
      );
    });

  it(`should update state when ${authActionTypes.AUTHENTICATE} is triggered`,
    () => {
      expect(authenticateUser(defaultState,
        { type: authActionTypes.AUTHENTICATE })).toEqual(
        stateUpdateHelper(defaultState, {
          authenticated: true,
        }),
      );
    });

  it(`should update state when ${authActionTypes.SIGNOUT} is triggered`,
    () => {
      expect(signOutUser(defaultState,
        { type: authActionTypes.SIGNOUT })).toEqual(
        stateUpdateHelper(defaultState, {
          authenticated: false,
        }),
      );
    });

  it(`should update state when ${authActionTypes.SIGNIN_SUCCESS} is triggered`,
    () => {
      expect(signinReducer(
        defaultState,
        { type: authActionTypes.SIGNIN_SUCCESS, payload: 'success' },
      )).toEqual(
        stateUpdateHelper(defaultState, {
          signinProcessing: false,
          signinError: false,
          signinResponse: 'success',
          signinSuccess: true,
          authenticated: true,
        }),
      );
    });

  it(`should update state when ${authActionTypes.SIGNIN_FAILURE} is triggered`,
    () => {
      const payload = {
        response: {
          signinResponse: {
            data: { message: 'Sorry, could not signin the user' },
          },
        },
      };
      expect(signinReducer(
        defaultState,
        { type: authActionTypes.SIGNIN_FAILURE, payload },
      )).toEqual(
        stateUpdateHelper(defaultState, {
          signinProcessing: false,
          signinError: true,
          signinSuccess: false,
          signinResponse: payload,
        }),
      );
    });

  it(`should update state when ${authActionTypes.SIGNOUT} is triggered`,
    () => {
      expect(signinReducer(
        defaultState,
        { type: authActionTypes.SIGNOUT },
      )).toEqual(
        stateUpdateHelper(defaultState, {
          signinProcessing: false,
          signinError: false,
          signinResponse: null,
          signinSuccess: false,
          authenticated: false,
        }),
      );
    });

  it(`should update state when ${authActionTypes.AUTHENTICATE} is triggered`,
    () => {
      expect(signinReducer(
        defaultState,
        { type: authActionTypes.AUTHENTICATE },
      )).toEqual(
        stateUpdateHelper(defaultState, {
          signinProcessing: false,
          signinError: false,
          signinResponse: null,
          signinSuccess: false,
          authenticated: true,
        }),
      );
    });

  it('should return default state when nothing is triggered', () => {
    expect(signinReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });
});
