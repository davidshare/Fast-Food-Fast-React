import moxios from 'moxios';

import * as signinActions
  from '../../src/actions/authActions/signinActions';
import * as authActionTypes
  from '../../src/actions/authActions/authActionTypes';
import { SERVER_API_URL } from '../../src/helpers/pageUrls';

const dispatch = jest.fn();
const fakeUserObject = {
  email: 'davidessien@gmail.com',
  password: 'gemshare',
};

const mockResponse = {
  response: {
    response: {
      data: { message: 'some response' },
    },
  },
};

describe('Signin actions ', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an action if START_SIGNIN is triggerd', () => {
    expect(signinActions.startSigninAction()).toEqual({
      type: authActionTypes.START_SIGNIN,
    });
  });

  it('should return an action if SIGNIN_SUCCESS is triggerd', () => {
    expect(signinActions.signinSuccessAction()).toEqual({
      type: authActionTypes.SIGNIN_SUCCESS,
    });
  });

  it('should return an action if SIGNUP_FAILURE is triggerd', () => {
    expect(signinActions.signinFailureAction()).toEqual({
      type: authActionTypes.SIGNIN_FAILURE,
    });
  });

  it('should call the signin dispatch function', async () => {
    moxios.stubRequest(`${SERVER_API_URL}/auth/login`, mockResponse);
    await signinActions.signinUser(fakeUserObject)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: authActionTypes.START_SIGNIN,
    });
  });
});
