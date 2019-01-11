import React from 'react';
import '../styles/authContainer.css';

const authContainer = (props) => {
	const imgBackground = props.imgBackground;
	return <div className={`authContainer ${imgBackground}`}>
		{ props.children }
	</div>
};

export default authContainer;
