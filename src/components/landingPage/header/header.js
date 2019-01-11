import React from 'react';

import Nav from '../../nav/nav';
import Hero from './hero/hero';

import '../../../styles/header.css';

const header = (props) => (
	<header>
		<Hero />
		{props.children}
	</header>
);

export default header;
