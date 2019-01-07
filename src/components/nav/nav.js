import React from 'react';

import NavList from './navList';
import Brand from './brand';
import '../../styles/nav.css';

const nav = (props) => (
	<nav id="nav">
		<Brand />
		<NavList />
		{props.children}
  </nav>
);

export default nav;
