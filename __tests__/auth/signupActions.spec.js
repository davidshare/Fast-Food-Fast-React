import moxios from 'moxios';

import * as signupActions
  from '../../src/actions/authActions/signupActions';
import * as authActionTypes
  from '../../src/actions/authActions/authActionTypes';
import { SERVER_API_URL } from '../../src/helpers/pageUrls';

const dispatch = jest.fn();
const fakeUserObject = {
  firstName: 'David',
  lastName: 'Essien',
  email: 'davidessien@gmail.com',
  password: 'gemshare',
};

const mockResponse = {
  response: {
    response: {
      data: { message: 'Sorry could not create article' },
    },
  },
};

describe('Signup actions ', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an action if START_SIGNUP is triggerd', () => {
    expect(signupActions.startSignupAction()).toEqual({
      type: authActionTypes.START_SIGNUP,
    });
  });

  it('should return an action if SIGNUP_SUCCESS is triggerd', () => {
    expect(signupActions.signupSuccessAction()).toEqual({
      type: authActionTypes.SIGNUP_SUCCESS,
    });
  });

  it('should return an action if SIGNUP_FAILURE is triggerd', () => {
    expect(signupActions.signupFailureAction()).toEqual({
      type: authActionTypes.SIGNUP_FAILURE,
    });
  });

  it('should call the signup dispatch function', async () => {
    moxios.stubRequest(`${SERVER_API_URL}/auth/signup`, mockResponse);
    await signupActions.signupUser(fakeUserObject)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: authActionTypes.START_SIGNUP,
    });
  });
});
