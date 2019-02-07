import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withToastManager } from 'react-toast-notifications';

import {
  getCart,
  calculateTotalPrice,
  calculateTotalQuantity,
  removeItem,
  updateCartIcon,
} from '../../helpers/cartHelper';

import '../../styles/cart.css';
import '../../styles/authForms.css';
import Modal from '../Modal/Modal';
import OrderForm from '../Order/OrderForm';
import { toastSuccessObj } from '../../helpers/constants';
import CartItem from './CartItem';
import PageHeader from '../PageHeader';

/**
 * @class Cart
 * @extends {Component}
 */
export class Cart extends Component {
  state = {
    cart: getCart() || {},
    modalOpen: false,
    totalPrice: 0,
    totalQuantity: 0,
  }

  static propTypes = {
    placeOrder: PropTypes.func,
    placeOrderSuccess: PropTypes.bool,
    toastManager: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

/**
 * @description - method to updatate totalPrice and totalQuantity
 * @returns { undefined } updates the state
 * @memberof Cart
 */
updateTotalValues = ({ totalQuantity, totalPrice }) => {
  this.setState({ totalQuantity, totalPrice });
}

/**
 *
 * @description - method to execute when component mounts
 * @returns { undefined }
 * @memberof Cart
 */
componentDidMount = () => {
  this.setState({
    cart: getCart(),
    totalQuantity: calculateTotalQuantity(getCart()),
    totalPrice: calculateTotalPrice(getCart()),
  });
}

/**
 * @description - method to clear the cart
 * @returns { undefined } - updates state
 * @memberof Cart
 */
clearCart = () => {
  this.setState({ cart: {} });
  localStorage.removeItem('cart');
  updateCartIcon();
};

/**
 * @description - method to display the modal
 * @returns { undefined } - updates state
 * @memberof Cart
 */
showModal = () => {
  this.setState({ modalOpen: true });
}

/**
 * @description - method to close the modal
 * @returns { undefined } updates the state
 * @memberof Cart
 */
closeModal = () => {
  this.setState({ modalOpen: false });
}

/**
 * @description - method to submit the order
 * @param { object } orderObject
 * @returns { undefined } sets state
 * @memberof Cart
 */
submitOrder = (orderObject) => {
  this.props.placeOrder(orderObject);
}

/**
 * @description - method to remove an item from the cart
 * @param { object } item - food item
 * @returns { undefined } updates the this.state
 * @memberof Cart
 */
removeItemFromCart = (item) => {
  const newCart = removeItem(item);
  this.setState({ cart: newCart });
  const totalItems = {
    totalQuantity: calculateTotalQuantity(newCart),
    totalPrice: calculateTotalPrice(newCart),
  };
  updateCartIcon();
  this.updateTotalValues(totalItems);
}

/**
 * @description - method to update the component
 * @param { object } nextProps
 * @param { object } nextState
 * @returns { boolean } true
 * @memberof Cart
 */
shouldComponentUpdate = (nextProps, nextState) => {
  if (this.props.placeOrderSuccess !== nextProps.placeOrderSuccess
      && nextProps.placeOrderSuccess) {
    this.props.toastManager.add('Your order has been placed successfully',
      toastSuccessObj);
    this.props.history.push('/menu');
    return true;
  }

  if (nextState.totalPrice !== this.state.totalPrice && nextState) {
    this.setState({ totalPrice: nextState.totalPrice });
    return true;
  }
  return true;
}

/**
 * @description - method to render component
 * @returns { jsx } jsx
 * @memberof Cart
 */
render() {
  const { cart } = this.state;
  let arrObj;
  if (cart) {
    arrObj = Object.keys(cart);
  }
  return (
      <Fragment>
        <PageHeader pageTitle="Cart" />
        { (this.state.cart
          && Object.keys(this.state.cart).length > 0)
          && <div className="cartContainer">
          <table className="cartTable">
            <thead>
            <tr className='headeer'>
              <th>Meal</th><th></th><th>Price</th><th>quantity</th><th>
              Total</th><th className="close-col"></th>
            </tr>
            </thead>
            <tbody>
            {arrObj.length < 1
              ? <tr key="1" />
              : arrObj.map((item, key) => {
                const meal = cart[item];
                return (
                  <CartItem
                    key={key}
                    id={key}
                    meal={meal}
                    updateTotals={this.updateTotalValues}
                    removeItemFromCart={this.removeItemFromCart}
                  />);
              })
            }
             </tbody>
             <tfoot>
             <tr className='footer'>
               <td></td>
               <td></td>
               <td>Total</td>
               <td>{ this.state.totalQuantity }</td>
               <td>&#8358;{ this.state.totalPrice }</td><td></td>
             </tr>
             </tfoot>
          </table>
          <div className="cartButtons">
            <button onClick={this.clearCart}
            className="clearBtn">Clear cart</button>
            <button onClick={this.showModal}
            className="orderBtn">Order Now</button>
          </div>
        </div>}
        {(!this.state.cart || Object.keys(this.state.cart) < 1)
          && <h3 className="noItems">
            You don't have any items in your cart. Please
             <Link to='/menu'> Click Here </Link> to add meals to your cart.
            </h3>}

        {this.state.modalOpen && <Modal modalClose={this.closeModal}>
            <OrderForm placeOrderAction={this.submitOrder}/>
        </Modal>}
      </Fragment>
  );
}
}

export default withToastManager(Cart);
