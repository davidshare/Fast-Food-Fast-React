import { shallow } from 'enzyme';
import React from 'react';
import { Signin } from '../../src/components/auth/Signin';

describe('Signin Component', () => {
  const spy = jest.fn();
  const props = {
    toastManager: {
      add: jest.fn(),
    },
    signinError: false,
    signinSuccess: false,
    signinUser: spy,
  };
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: '',
      value: 'datavalues',
    },
  };
  const wrapper = shallow(<Signin {...props}/>);

  it('should render the signin form', () => {
    const container = wrapper.find('#signinForm');
    expect(container.length).toEqual(1);
  });

  it('should change state if email field is changed', () => {
    event.target.name = 'email';
    event.target.value = 'davidshare@gmail.com';
    const input = wrapper.find('input');
    input.at(0).simulate('change', event);
    expect(wrapper.state().email).toEqual(event.target.value);
  });

  it('should change state if password field is changed', () => {
    event.target.name = 'password';
    const input = wrapper.find('input');
    input.at(1).simulate('change', event);
    expect(wrapper.state().password).toEqual(event.target.value);
  });

  it('should not change state  if no field is supplied', () => {
    event.target.name = 'username';
    const defaultValue = wrapper.instance().onInputFieldChangeHandler(event);
    expect(defaultValue).toEqual(false);
  });

  it('should display response messages', () => {
    const nextProps = {
      ...props,
      signinError: true,
    };
    wrapper.instance().shouldComponentUpdate(nextProps);
  });

  it('should display response messages', () => {
    const nextProps = {
      ...props,
      signinSuccess: true,
    };
    wrapper.instance().shouldComponentUpdate(nextProps);
  });

  it('should signup the user on submit', () => {
    const signinForm = wrapper.find('form');
    signinForm.simulate('submit', event);
    expect(wrapper.instance().props.signinUser).toHaveBeenCalled();
  });
});
