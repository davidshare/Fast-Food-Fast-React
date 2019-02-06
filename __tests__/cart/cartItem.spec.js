import React from 'react';
import { shallow } from 'enzyme';
import { CartItem } from '../../src/components/Cart/CartItem';

describe('Cart component ', () => {
  const spyFn = jest.fn();
  const props = {
    meal: {},
    updateTotals: spyFn,
    removeItemFromCart: spyFn,
  };

  const event = {
    target: {
      name: 'quantityInput',
    },
    preventDefault: spyFn,
  };

  const wrapper = shallow(<CartItem {...props}/>);

  it('should render the cart', () => {
    wrapper.setState({
      cart: {
        rice: {},
      },
    });
    const container = wrapper.find('.picture');
    expect(container.length).toEqual(1);
  });

  it('should display response messages', () => {
    const nextProps = {
      meal: true,
    };

    const nextState = {
      totalPrice: 0,
      totalQuantity: 0,
    };
    wrapper.instance().shouldComponentUpdate(nextProps, nextState);
  });

  it('should change the quantity', () => {
    wrapper.instance().quantityChange(event);
    expect(props.updateTotals).toHaveBeenCalled();
  });

  it('should change the remove an item', () => {
    wrapper.instance().handleRemoveClick(event);
    expect(props.removeItemFromCart).toHaveBeenCalled();
  });
});
