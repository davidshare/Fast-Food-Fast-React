import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navList.css';

const navList = (props) => (
	<ul className="navList">
    <li><Link to="/">Home</Link></li>
    <li><Link  to="#about">About</Link></li>
    <li><Link to="meals.html">Meals</Link></li>
    <li><Link to="order_history.html">Order History</Link></li>
    <li><Link to="signup.html">Signup</Link></li>
    <li><Link to="signin.html">Signin</Link></li>
    <li><Link to="#" onClick={props.logout}>Signout</Link></li>
    <li>
      <Link to="cart.html">
        cart icon
			</Link>
		</li>
  </ul>
);

export default navList;
