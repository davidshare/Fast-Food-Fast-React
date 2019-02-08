import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../../src/components/PageHeader';

describe('PageHeader component ', () => {
  const wrapper = shallow(<PageHeader />);
  it('should render the modal component ', () => {
    const container = wrapper.find('.pageHeader');
    expect(container.length).toEqual(1);
  });
});
