import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import MealCard from './MealCard';
import '../../styles/menu.css';
import { getCart } from '../../helpers/cartHelper';
import PageHeader from '../PageHeader';
import PageLoader from '../PageLoader';

/**
 * @description - component to view menu
 * @class ViewMenu
 * @extends {Component}
 */
class ViewMenu extends Component {
  state = {
    menu: [],
    cart: {},
  }

  static propTypes = {
    fetchMenu: PropTypes.func.isRequired,
    fetchMenuResponse: PropTypes.array,
    fetchingMenu: PropTypes.bool,
  }

  /**
 * @param { object } nextProps
 * @returns
 * @memberof TextEditor
 * @returns { boolean } false
 */
  shouldComponentUpdate(nextProps) {
    if (this.props.fetchMenuResponse !== nextProps.fetchMenuResponse
        && nextProps.fetchMenuResponse !== null) {
      this.setState({ menu: nextProps.fetchMenuResponse });
      return true;
    }
    return true;
  }

  /**
 * @description - method to execute when component mounts
 * @memberof ViewMenu
 * @returns { undefined }
 */
  componentDidMount() {
    this.props.fetchMenu();
    this.setState({ cart: getCart() });
  }

    /**
 * @description - function to set the number of items in the cart
 * @param { integer } cartCount
 * @returns {undefine} undefined
 * @memberof ViewMenu
 */
    setCartCount = (cartCount) => {
      this.setState({ cartCount });
    }

    /**
 * @description - method to render the component
 * @returns { JSX } jsx
 * @memberof ViewMenu
 */
    render() {
      const menu = this.props.fetchMenuResponse;
      return (
        <Fragment>
          <PageHeader pageTitle="menu"/>
          {this.props.fetchingMenu && <PageLoader size="400px" />}

            <div className="menuContainer">
            {(menu.length < 1)
              ? <div />
              : (menu.map(meal => (<MealCard
                  key={meal.id}
                  meal={meal}
                  setCartCount={this.setCartCount}
                />)))
            }
            </div>
        </Fragment>
      );
    }
}
export default ViewMenu;
