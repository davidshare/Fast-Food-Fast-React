import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav/Nav';

import '../styles/pageHeader.css';


const PageHeader = props => (
  <div className="pageHeader">
    <Nav style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}/>
    <h1 className="pageTitle">{props.pageTitle}</h1>
  </div>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string,
};

export default PageHeader;
