import React from 'react';

import Hero from './hero/hero';

import '../../../styles/header.css';

const header = props => (
  <header>
    <Hero />
    {props.children}
  </header>
);

export default header;
