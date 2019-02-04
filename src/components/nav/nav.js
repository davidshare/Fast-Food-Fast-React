import React from 'react';
import PropTypes from 'prop-types';

import NavList from './navList';
import Brand from './brand';
import '../../styles/nav.css';

const Nav = props => (
  <nav id="nav" style={props.style}>
    <Brand />
    <NavList />
    {props.children}
  </nav>
);

Nav.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};
export default Nav;
