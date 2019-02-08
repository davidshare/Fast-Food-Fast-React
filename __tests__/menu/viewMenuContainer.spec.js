import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../src/containers/menu/ViewMenuContainer';

describe('it should map state and dispatch to props', () => {
  const state = {
    viewMenuReducer: {},
  };
  it('should map state to props', () => {
    expect(mapStateToProps(state)).toEqual({});
  });

  it('should dispatch state to props', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
