import { setToken } from '../../src/helpers/authHelpers';

describe('auth helpers', () => {
  it('should set a token', () => {
    expect(setToken('9ujlknldflknlsdkfldf')).toEqual(undefined);
  });
});
