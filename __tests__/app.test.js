import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('App component', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render a higher order component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('aux').length).toEqual(1);
  });
});
