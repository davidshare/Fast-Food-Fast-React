import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/navList.css';
import cart from '../../assets/icons/cart.svg';
import { SIGNOUT } from '../../actions/authActions/authActionTypes';

/**
 * @class NavList
 * @extends {Component}
 */
export class NavList extends Component {
  static propTypes = {
    authenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  navLinks = () => {
    const authLinks = [
      <li key="order_history">
        <Link to="order_history">Order History</Link>
      </li>,
      <li key="logout">
        <Link to="#" onClick={this.signOut}>Signout</Link>
      </li>,
    ];

    const unAuthLinks = [
      <li key="signup"><Link to="signup">Signup</Link></li>,
      <li key="signin"><Link to="signin">Signin</Link></li>,
    ];

    const noAuthLinks = [
      <li key="home"><Link to="/">Home</Link></li>,
      <li key="about"><Link to="/#about">About</Link></li>,
      <li key="menu"><Link to="menu">Menu</Link></li>,
    ];

    const cartLink = [
      <li key="cart" className="cart-icon-container">
        <Link to="cart">
          <span className="cart-icon">
            <img src={cart} /><sup id="cart-count">0</sup>
          </span>
        </Link>
      </li>,
    ];

    if (this.props.authenticated) {
      return [...authLinks, ...noAuthLinks, ...cartLink];
    }

    return [...noAuthLinks, ...unAuthLinks, ...cartLink];
  }

  signOut = () => {
    this.props.dispatch({ type: SIGNOUT });
  }

  /**
 * @desctiption - method to render the component
 * @returns { jsx } jsx
 * @memberof NavList
 */
  render() {
    return (
      <ul className="navList hiddenNav" id="navList">
      {this.navLinks()}
      </ul>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.signinReducer,
});

export default connect(mapStateToProps)(NavList);
