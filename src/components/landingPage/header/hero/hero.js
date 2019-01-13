import React from 'react';

import '../../../../styles/hero.css';

const hero = () => (
  <div className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Discover the new definition of delicious</h1>
        <p className="hero-subtitle">Every meal will be your favourite</p>
      </div>
        <form name="search" method="post" className="hero-form">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="I would love to have..."
            className="hero-search"
          />
        </form>
    </div>
);

export default hero;
