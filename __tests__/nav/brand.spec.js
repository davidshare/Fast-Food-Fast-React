import React from 'react';
import { shallow } from 'enzyme';

import Brand from '../../src/components/Nav/brand';

describe('Brand component ', () => {
  const wrapper = shallow(<Brand />);
  it('should render the modal component ', () => {
    const container = wrapper.find('.brand');
    expect(container.length).toEqual(1);
  });
});
