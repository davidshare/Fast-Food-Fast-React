import React from 'react';

import NavList from '../navList';


const sideNav = (props) => {
	return (
			<div className="sideNav">
				<div className="SideLogo">
					Fast-Food-Fast
				</div>
				<nav>
					<NavList />
				</nav>
			</div>
	);
}

export default sideNav;
