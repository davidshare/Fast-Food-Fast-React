import React, { Component } from 'react';
import PropTypes from 'prop-types';

import menuIcon from '../../assets/icons/menuIcon.svg';

import NavList from './navList';
import Brand from './brand';
import '../../styles/nav.css';
import { updateCartIcon } from '../../helpers/cartHelper';

/**
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  toggleNav = () => {
    const navList = document.getElementById('navList');
    navList.classList.toggle('hiddenNav');
  }

  componentDidMount = () => {
    updateCartIcon();
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 250) {
        document.getElementById('nav').classList.add('darkNav');
      }
      if (window.scrollY < 250) {
        document.getElementById('nav').classList.remove('darkNav');
      }
    });
  }

  /**
 * @returns { jsx } jsx
 * @memberof Nav
 */
  render() {
    return (
      <nav id="nav">
        <Brand />
        <NavList />
        {this.props.children}
        <div id="iconContainer">
          <img
            src={menuIcon} alt="menu icon"
            className="menuIcon"
            onClick={this.toggleNav}
          />
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  children: PropTypes.any,
};
export default Nav;
