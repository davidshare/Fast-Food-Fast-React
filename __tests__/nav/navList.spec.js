import React from 'react';
import { shallow } from 'enzyme';

import { NavList, mapStateToProps } from '../../src/components/Nav/navList';

describe('NavList component ', () => {
  const wrapper = shallow(<NavList />);

  it('should render the navList component ', () => {
    const container = wrapper.find('.navList');
    expect(container.length).toEqual(1);
  });

  it('it should generate the navLinks', () => {
    wrapper.instance().navLinks();
  });

  it('it should generate  authenticated navLinks', () => {
    wrapper.setProps({ authenticated: true });
    wrapper.instance().navLinks();
  });

  it('it should signout the user', () => {
    wrapper.setProps({ dispatch: jest.fn() });
    wrapper.instance().signOut();
  });

  it('it should map state to props', () => {
    expect(mapStateToProps({ userName: 'david' })).toEqual({});
  });
});
