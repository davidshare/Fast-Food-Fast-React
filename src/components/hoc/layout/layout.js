import React from 'react';

import Aux from '../aux';
import Nav from '../../nav/nav';

const layout = (props) => (
	<Aux>
		<div>
			<Nav/>
		</div>
		<main className='Content'>
		{props.children}
		</main>
	</Aux>
);

export default layout;
