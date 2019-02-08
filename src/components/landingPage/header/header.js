import React from 'react';
import PropTypes from 'prop-types';

import Hero from './hero/hero';
import Nav from '../../Nav/Nav';

import '../../../styles/header.css';

const header = props => (
  <header>
    <Nav style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}/>
    <Hero />
    {props.children}
  </header>
);

header.propTypes = {
  children: PropTypes.any,
};

export default header;
