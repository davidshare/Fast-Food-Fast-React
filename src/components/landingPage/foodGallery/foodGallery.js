import React from 'react';

import GalleryImage from './galleryImage';

import '../../../styles/foodGallery.css';

const generateImageList = () => {
	const imageList = [];
	for(let i = 7; i<=14; i++){
		const imagePath = '../../../src/assets/images/meal'+i+'.jpg';
		imageList.push(<li key={'image'+i}><GalleryImage image={imagePath}/></li>);
	}
	return imageList;
}

const imageList = generateImageList();


const foodGallery = () => (
	<section className="foodGallery">
		<ul className="gallery-block">
			{imageList}
		</ul>
	</section>
);

export default foodGallery;
