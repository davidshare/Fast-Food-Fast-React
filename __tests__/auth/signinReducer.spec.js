import signinReducer, {
  initialState as defaultState,
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

  it('should return default state when nothing is triggered', () => {
    expect(signinReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });
});
