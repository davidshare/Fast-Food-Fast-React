import React from 'react';
import { shallow } from 'enzyme';

import PageLoader from '../../src/components/PageLoader';

describe('PageLoader component ', () => {
  const wrapper = shallow(<PageLoader />);
  it('should render the modal component ', () => {
    const container = wrapper.find('.pageLoader');
    expect(container.length).toEqual(1);
  });
});
