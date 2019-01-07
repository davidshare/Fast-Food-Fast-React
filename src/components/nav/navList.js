import React from 'react';

import '../../styles/navList.css';

const navList = (props) => (
	<ul className="navList">
    <li><a href="index.html">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="meals.html">Meals</a></li>
    <li><a href="order_history.html">Order History</a></li>
    <li><a href="signup.html">Signup</a></li>
    <li><a href="signin.html">Signin</a></li>
    <li><a href="#" onClick={props.logout}>Signout</a></li>
    <li>
      <a href="cart.html">
        cart icon
			</a>
		</li>
  </ul>
);

export default navList;
