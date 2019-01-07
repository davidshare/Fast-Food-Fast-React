import React from 'react';

const foodGallery = (props) => (
		<figure className="meal-photo">
			<img src={props.image} alt="food image"/>
		</figure>
);

export default foodGallery;
