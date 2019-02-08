import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../src/components/footer';

describe('Footer component ', () => {
  const wrapper = shallow(<Footer />);
  it('should render the modal component ', () => {
    const container = wrapper.find('.footerText');
    expect(container.length).toEqual(1);
  });
});
