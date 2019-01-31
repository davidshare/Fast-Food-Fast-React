import { shallow } from 'enzyme';
import React from 'react';
import { Signup } from '../../src/components/auth/Signup';

describe('Signup Component', () => {
  const spy = jest.fn();
  const props = {
    toastManager: {
      add: jest.fn(),
    },
    signupError: false,
    signupSuccess: false,
    signupUser: spy,
  };
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: '',
      value: 'datavalues',
    },
  };
  const wrapper = shallow(<Signup {...props}/>);

  it('should render the signup form', () => {
    const container = wrapper.find('#signupForm');
    expect(container.length).toEqual(1);
  });

  it('should change state if firstname field is changed', () => {
    event.target.name = 'firstname';
    const input = wrapper.find('input');
    input.at(0).simulate('change', event);
    expect(wrapper.state().firstName).toEqual(event.target.value);
  });

  it('should change state if firstname field is changed', () => {
    event.target.name = 'lastname';
    const input = wrapper.find('input');
    input.at(1).simulate('change', event);
    expect(wrapper.state().lastName).toEqual(event.target.value);
  });

  it('should change state if email field is changed', () => {
    event.target.name = 'email';
    event.target.value = 'davidshare@gmail.com';
    const input = wrapper.find('input');
    input.at(2).simulate('change', event);
    expect(wrapper.state().email).toEqual(event.target.value);
  });

  it('should change state if password field is changed', () => {
    event.target.name = 'password';
    const input = wrapper.find('input');
    input.at(3).simulate('change', event);
    expect(wrapper.state().password).toEqual(event.target.value);
  });

  it('should change state if email field is changed', () => {
    event.target.name = 'username';
    const defaultValue = wrapper.instance().onInputFieldChangeHandler(event);
    expect(defaultValue).toEqual(false);
  });

  it('should display response messages', () => {
    const nextProps = {
      ...props,
      signupError: true,
    };
    wrapper.instance().shouldComponentUpdate(nextProps);
  });

  it('should display response messages', () => {
    const nextProps = {
      ...props,
      signupSuccess: true,
    };
    wrapper.instance().shouldComponentUpdate(nextProps);
  });

  it('should signup the user on submit', () => {
    const signupForm = wrapper.find('form');
    signupForm.simulate('submit', event);
    expect(wrapper.instance().props.signupUser).toHaveBeenCalled();
  });
});
