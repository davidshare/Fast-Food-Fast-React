import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/navList.css';

const navList = props => (
  <ul className="navList">
    <li><Link to="/">Home</Link></li>
    <li><Link to="#about">About</Link></li>
    <li><Link to="menu">Menu</Link></li>
    <li><Link to="order_history.html">Order History</Link></li>
    <li><Link to="signup">Signup</Link></li>
    <li><Link to="signin">Signin</Link></li>
    <li><Link to="#" onClick={props.logout}>Signout</Link></li>
    <li>
      <Link to="cart.html">
        cart icon
      </Link>
    </li>
  </ul>
);

navList.propTypes = {
  logout: PropTypes.func,
};

export default navList;
