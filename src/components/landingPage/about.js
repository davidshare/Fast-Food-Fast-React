import React from 'react';

import Chef from '../../assets/images/chef.jpg';

import '../../styles/about.css';

const about = () => (
	<section className="about" id="about">
    <div className="about-text">
      <h1 className="about-title">About</h1>
      <p className="about-content">
        Fast-Food-Fast is your best friend when it comes to taking care of your stomach. We are an online delivery
        service that takes away the stress of having to worry about what to eat.
      </p>
      <p className="about-content">
        With Fast-Food-Fast, you don't have to repeat a meal. However, every meal will be your favourite. We deliver to
        you at your doorstep anytime of the day and anywhere.
      </p>
		</div>
		<div className="about-image">
      <img src={Chef} alt="image of chef"/>
    </div>
  </section>
);

export default about;
