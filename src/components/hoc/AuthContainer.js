import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/authContainer.css';

const AuthContainer = (props) => {
  const { imgBackground } = props;
  return <div className={`authContainer ${imgBackground}`}>
    { props.children }
  </div>;
};

AuthContainer.propTypes = {
  children: PropTypes.any,
  imgBackground: PropTypes.string,
};

export default AuthContainer;
