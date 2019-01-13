import React from 'react';

import Header from './header/header';
import About from './about';
import FoodGallery from './foodGallery/foodGallery';
import HowTo from './howTo';
import Footer from '../footer';
import Layout from '../hoc/layout/layout';

const LandingPage = () => (
  <Layout>
      <Header />
      <About />
      <FoodGallery />
      <HowTo />
      <Footer />
  </Layout>

);

export default LandingPage;
