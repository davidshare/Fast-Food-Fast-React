import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '../../src/components/Cart/Cart';

describe('Cart component ', () => {
  const spyFn = jest.fn();
  const props = {
    history: {
      push: spyFn,
    },
    toastManager: {
      add: jest.fn(),
    },

    placeOrder: spyFn,
  };

  const fakeOrderObject = {
    recipientEmail: 'davidessien@gmail.com',
    recipientAddress: 'gemshare',
    recipientPhoneNumber: '0990090090',
    firstName: 'david',
    lastName: 'essien',
    item: [
      {
        item: 'rice and beans',
        price: 3000,
        quantity: 3,
      },
    ],
  };
  const wrapper = shallow(<Cart {...props}/>);

  it('should render the cart', () => {
    wrapper.setState({
      cart: {
        rice: {},
      },
    });
    const container = wrapper.find('.cartContainer');
    expect(container.length).toEqual(1);
  });

  it('should render the cart', () => {
    wrapper.setState({
      cart: 0,
    });
    const container = wrapper.find('.cartContainer');
    expect(container.length).toEqual(0);
  });

  it('should update the totalQuantity and totalPrice', () => {
    wrapper.instance().updateTotalValues({
      totalQuantity: 2, totalPrice: 6000,
    });
    expect(wrapper.state().totalQuantity).toEqual(2);
  });

  it('should clear the cart', () => {
    window.document.getElementById = jest.fn(() => ({ }));
    wrapper.instance().clearCart();
    expect(wrapper.state().cart).toEqual({});
  });

  it('should display the modal', () => {
    wrapper.instance().showModal();
    expect(wrapper.state().modalOpen).toEqual(true);
  });

  it('should display the modal', () => {
    wrapper.instance().closeModal();
    expect(wrapper.state().modalOpen).toEqual(false);
  });

  it('should submit an order', () => {
    wrapper.instance().submitOrder(fakeOrderObject);
    expect(props.placeOrder).toHaveBeenCalled();
  });
});
