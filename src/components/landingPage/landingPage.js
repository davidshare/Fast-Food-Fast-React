import React, { Component } from 'react';

import Header from './header/header';
import About from './about';
import FoodGallery from './foodGallery/foodGallery';
import HowTo from './howTo';
import Footer from '../footer';

class LandingPage extends Component {
    render(){
		return <div>
			<Header />
			<About />
			<FoodGallery />
			<HowTo />
			<Footer />
        </div>
    }
}

export default LandingPage;
