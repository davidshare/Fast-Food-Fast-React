import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../aux';

const Layout = props => (
  <Aux>
    <main className='Content'>
    { props.children }
    </main>
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
