import React from 'react';

const hambugger = (props) => (
	<div className="menu-icon" onClick={props.toggleNavDisplay}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
  </div>
);

export default hambugger;
