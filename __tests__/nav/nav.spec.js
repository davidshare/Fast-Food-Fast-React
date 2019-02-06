import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../src/components/Modal/Modal';

describe('Modal component ', () => {
  const wrapper = shallow(<Modal />);
  it('should render the modal component ', () => {
    const container = wrapper.find('#simpleModal');
    expect(container.length).toEqual(1);
  });
});
