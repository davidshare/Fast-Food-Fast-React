import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/authForms.css';
import userIcon from '../../assets/icons/user-silhouette.svg';
import envelopeIcon from '../../assets/icons/envelope.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import { getCartItems } from '../../helpers/cartHelper';


/**
 * @class OrderForm
 * @extends {Component}
 */
class OrderForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

static propTypes = {
  placeOrderAction: PropTypes.func,
}

/**
 * @param { object } event
 * @returns { undefined } undefined or boolean false
 * @description function to handle the form input
 * @memberof OrderForm
 */
onInputFieldChangeHandler = (event) => {
  event.preventDefault();
  switch (event.target.name) {
    case 'firstname':
      this.setState({ firstName: event.target.value });
      break;
    case 'lastname':
      this.setState({ lastName: event.target.value });
      break;
    case 'email':
      this.setState({ email: event.target.value });
      break;
    case 'phone':
      this.setState({ phone: event.target.value });
      break;
    case 'address':
      this.setState({ address: event.target.value });
      break;
    default:
      return false;
  }
}

/**
 * @memberof Signup
 * @description - method to handle user click for signup
 * @param { object } event - the event object
 * @returns { null } - returns nothing
 */
handlePlaceOrder = (event) => {
  event.preventDefault();
  const items = getCartItems();
  const orderObject = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    recipientEmail: this.state.email,
    recipientAddress: this.state.address,
    recipientPhoneNumber: this.state.phone,
    items,
  };
  this.props.placeOrderAction(orderObject);
}

/**
 * @description method to render the component
 * @returns { JSX } jsx
 * @memberof OrderForm
 */
render() {
  return (
      <form name="authForm orderForm" id="orderForm" className="orderForm" onSubmit={this.handlePlaceOrder}>
      <div className="formTitle">
        <h2>Delivery details</h2>
        <p>Please fill all the fields with correct information</p>
      </div>
      <div className="formControl">
        <span className="form-icon">
          <img src={userIcon} alt="email icon" />
        </span>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          value={this.state.firstName}
          onChange={this.onInputFieldChangeHandler}
          required
        />
        </div>
        <div className="formControl">
        <span className="form-icon">
          <img src={userIcon} alt="email icon" />
        </span>
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={this.state.lastName}
          onChange={this.onInputFieldChangeHandler}
          required
        />

      </div>
      <div className="formControl">
        <span className="form-icon">
          <img src={envelopeIcon} alt="email icon" />
        </span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onInputFieldChangeHandler}
          required
        />
      </div>
      <div className="formControl">
        <span className="form-icon">
          <img src={phoneIcon} alt="phone icon" />
        </span>
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          value={this.state.phone}
          onChange={this.onInputFieldChangeHandler}
          required
        />
      </div>
      <div className="formControl">
        <textarea
        rows="3"
        value={this.state.address}
        className="addressBox"
        name="address"
        onChange={this.onInputFieldChangeHandler}
        placeholder="Please enter a very detailed and specific address" />
      </div>
      <div className="formBtn">
        <button type="submit">Place order</button>
      </div>
      </form>
  );
}
}

export default OrderForm;
