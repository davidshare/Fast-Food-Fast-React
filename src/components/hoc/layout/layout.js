import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../aux';
import Nav from '../../Nav/Nav';

const Layout = props => (
  <Aux>
    <div>
      <Nav/>
    </div>
    <main className='Content'>
    { props.children }
    </main>
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
