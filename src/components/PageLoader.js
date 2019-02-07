import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import '../styles/loader.css';

const PageLoader = props => (
  <div className="pageLoader">
    <Loader
      type={ props.type || 'Grid'}
      color={ props.color || '#fff'}
      height={ props.height || '100'}
      width={ props.width || '100'}
    />
  </div>
);

PageLoader.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default PageLoader;
