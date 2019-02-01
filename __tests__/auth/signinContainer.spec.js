import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../src/containers/authContainers/SigninContainer';

describe('## Signin Container', () => {
  const state = {
    email: '',
    password: '',
  };
  it('should call mapStateToProps', () => {
    expect(typeof mapStateToProps(state)).toEqual('object');
  });

  it('should call mapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
