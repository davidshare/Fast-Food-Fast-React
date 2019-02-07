import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';

import { addToCart, getCart, updateCartIcon } from '../../helpers/cartHelper';

import '../../styles/mealCard.css';
import { toastSuccessObj, toastErrorObj } from '../../helpers/constants';
/**
 *
 * @class MealCard
 * @extends {Component}
 */
class MealCard extends Component {
  state = {
    meal: null,
    cartCount: getCart() ? getCart.length : 0,
  }

  static propTypes = {
    meal: PropTypes.object,
    toastManager: PropTypes.object.isRequired,
  }

/**
 * @description - method to handle click for adding to the cart
 * @param { object } event PropTypes.object
 * @returns { undefined }
 * @memberof MealCard
 */
handleClick = (event) => {
  const mealContainer = event.target.parentElement.children[0].children;
  const mealName = mealContainer.mealName.textContent.split(':')[0];
  const mealPrice = mealContainer.mealPrice.textContent.split('₦')[1];
  const mealImage = event.target.parentElement
    .parentElement.children[0].children.mealImage.src;

  const result = addToCart({ mealName, mealPrice, mealImage });
  if (result) {
    const cartCount = getCart().length || 0;
    this.setState({ cartCount });
    this.props.toastManager.add(
      `${mealName} has been added to the cart.`,
      toastSuccessObj,
    );
    updateCartIcon();
    return true;
  }
  this.props.toastManager.add(
    `${mealName} already exists in the cart.`,
    toastErrorObj,
  );
}

/**
 * @description - method to render the component
 * @returns { jsx } - jsx
 * @memberof MealCard
 */
render() {
  return (
      <div className="mealCard" id="mealCard">
        <div className="mealImageContainer">
          <img src={this.props.meal.picture} name="mealImage" alt="meal image"/>
        </div>
        <div className="mealContent">
          <div className="mealInfo">
            <span
              className="mealName"
              name="mealName">{this.props.meal.name}:
            </span>
            <span
              className="mealPrice"
              name="mealPrice">
              &#8358;{this.props.meal.price}
            </span>
          </div>
          <button onClick={this.handleClick}>Add to cart</button>
        </div>
      </div>
  );
}
}

export default withToastManager(MealCard);
