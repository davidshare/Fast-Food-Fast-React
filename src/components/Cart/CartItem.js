import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updateItemQuantity } from '../../helpers/cartHelper';


/**
 * @class CartItem
 * @extends {Component}
 */
export class CartItem extends Component {
  state = {
    meal: '',
    quantity: 0,
    price: 0,
    picture: '',
  }

  static propTypes = {
    meal: PropTypes.object.isRequired,
    updateTotals: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
  }

/**
 * @description method to render once component mounts
 * @return { jsx } jsx
 * @memberof CartItem
 */
componentDidMount = () => {
  if (this.props.meal) {
    const { meal } = this.props;
    this.setState({
      meal: meal.mealName,
      price: meal.mealPrice,
      quantity: meal.quantity,
      picture: meal.mealImage,
    });
    return true;
  }
}

/**
 * @description - method to update the component
 * @param { object } nextProps
 * @returns { boolean } true
 * @memberof CartItem
 */
shouldComponentUpdate = (nextProps) => {
  if (nextProps.meal !== this.props.meal && nextProps.meal) {
    this.setState({
      meal: nextProps.meal.mealName,
      price: nextProps.meal.mealPrice,
      quantity: nextProps.meal.quantity,
      picture: nextProps.meal.mealImage,
    });
  }
  return true;
}

/**
 * @description - method to set the state when quantity changes
 * @param { object } event
 * @returns { undefined }
*/
  quantityChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'quantityInput') {
      this.setState({ quantity: event.target.value });
      const itemTotals = updateItemQuantity(this.state.meal,
        event.target.value);
      this.props.updateTotals(itemTotals);
    }
  }

/**
 * @description - method to remove item from cart
 * @param { object } event
 * @returns { undefined } updates the state
 * @memberof CartItem
 */
handleRemoveClick = (event) => {
  event.preventDefault();
  this.props.removeItemFromCart(this.state.meal);
}

/**
 * @returns { jsx } jsx
 * @memberof CartItem
 */
render() {
  return (
      <tr>
        <td className="picture">
          <img src={this.state.picture} className="cartImage"/>
        </td>
        <td className="name">{this.state.meal}</td>
        <td className="price">&#8358;{this.state.price}</td>
        <td className="quantity">
          <input type="number"
            value={this.state.quantity}
            className="quantityInput"
            name="quantityInput"
            onChange={this.quantityChange}
            min="1"
            step="1"
          />
        </td>
        <td className="subTotal">
        &#8358;
        {parseInt(this.state.price, 10) * parseInt(this.state.quantity, 10)}
        </td>
        <td className="removeCol">
          <button
            className="removeBtn"
            onClick={this.handleRemoveClick}
          >
            remove
          </button>
        </td>
      </tr>
  );
}
}

export default CartItem;
