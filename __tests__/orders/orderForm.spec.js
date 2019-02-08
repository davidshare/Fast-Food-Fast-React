import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from '../../src/components/Order/OrderForm';

describe('Modal component ', () => {
  const wrapper = shallow(<OrderForm />);
  it('should render the OrderForm component ', () => {
    const container = wrapper.find('#orderForm');
    expect(container.length).toEqual(1);
  });
});
