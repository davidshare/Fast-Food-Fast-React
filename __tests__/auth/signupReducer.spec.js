import signupReducer, {
  initialState as defaultState,
} from '../../src/reducers/authReducers/signupReducer';
import * as authActionTypes
  from '../../src/actions/authActions/authActionTypes';
import stateUpdateHelper from '../../src/helpers/updateStateHelper';

describe('Signup Reducer', () => {
  it(`should update state when ${authActionTypes.START_SIGNUP} is triggered`,
    () => {
      expect(signupReducer(defaultState,
        { type: authActionTypes.START_SIGNUP })).toEqual(
        stateUpdateHelper(defaultState, {
          signupProcessing: true,
        }),
      );
    });

  it(`should update state when ${authActionTypes.SIGNUP_SUCCESS} is triggered`,
    () => {
      expect(signupReducer(
        defaultState,
        { type: authActionTypes.SIGNUP_SUCCESS, payload: 'success' },
      )).toEqual(
        stateUpdateHelper(defaultState, {
          signupProcessing: false,
          signupError: false,
          signupResponse: 'success',
          signupSuccess: true,
        }),
      );
    });

  it(`should update state when ${authActionTypes.SIGNUP_FAILURE} is triggered`,
    () => {
      const payload = {
        response: {
          response: {
            data: { message: 'Sorry could not create article' },
          },
        },
      };
      expect(signupReducer(
        defaultState,
        { type: authActionTypes.SIGNUP_FAILURE, payload },
      )).toEqual(
        stateUpdateHelper(defaultState, {
          signupProcessing: false,
          signupError: true,
          signupSuccess: true,
          response: payload,
        }),
      );
    });

  it('should return default state when nothing is triggered', () => {
    expect(signupReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });
});
