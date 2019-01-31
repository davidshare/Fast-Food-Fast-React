import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../src/containers/authContainers/signupContainer';

describe('## Signup Container', () => {
  const state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  it('should call mapStateToProps', () => {
    expect(typeof mapStateToProps(state)).toEqual('object');
  });

  it('should call mapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
