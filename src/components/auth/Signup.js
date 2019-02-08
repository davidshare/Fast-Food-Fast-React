import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import { Link } from 'react-router-dom';

import AuthContainer from '../hoc/AuthContainer';
import '../../styles/authForms.css';
import Brand from '../Nav/brand';
import lockIcon from '../../assets/icons/lock.svg';
import envelopeIcon from '../../assets/icons/envelope.svg';
import userIcon from '../../assets/icons/user-silhouette.svg';
import {
  SIGNUP_SUCCESS_MSG,
  SIGNUP_ERROR_MSG,
  toastSuccessObj,
  toastErrorObj,
} from '../../helpers/constants';

/**
 * @class Signup
 * @extends {Component}
 */
export class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  static propTypes = {
    signupUser: PropTypes.func,
    history: PropTypes.object,
    signupProcessing: PropTypes.bool,
    toastManager: PropTypes.object.isRequired,
    signupError: PropTypes.bool.isRequired,
    signupSuccess: PropTypes.bool.isRequired,
  }

/**
 * @memberof Signup
 * @description - method to handle user click for signup
 * @param { object } event - the event object
 * @returns { null } - returns nothing
 */
signupHandler = (event) => {
  event.preventDefault();
  const userObject = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    password: this.state.password,
  };
  this.props.signupUser(userObject, this.props.history);
}

/**
 * @description - method to handle change of input fields
 * @param { object} event - the event object
 * @memberof Signup
 * @returns { undefined }
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
    case 'password':
      this.setState({ password: event.target.value });
      break;
    default:
      return false;
  }
}


/**
 * @param { object } nextProps
 * @returns { boolean } true
 * @memberof Signup
 */
shouldComponentUpdate(nextProps) {
  if (this.props.signupError !== nextProps.signupError
    && nextProps.signupError === true) {
    this.props.toastManager.add(SIGNUP_ERROR_MSG, toastErrorObj);
  }

  if (this.props.signupSuccess !== nextProps.signupSuccess
    && nextProps.signupSuccess === true) {
    this.props.toastManager.add(SIGNUP_SUCCESS_MSG, toastSuccessObj);
  }

  return true;
}

/**
   * @description method that renders the signin componentDidMount = () => {
   * @returns { JSX } Jsx for login component
  * */
render() {
  return (
      <AuthContainer imgBackground="signupBackground">
      <div className="authBrand"><Brand /></div>
    <form
      className="authForm signupForm"
      onSubmit={this.signupHandler}
      id="signupForm"
    >
      <div className="formTitle">
        <h2>Signup</h2>
        <p>You can't go hungry when we've got you covered</p>
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
          <img src={lockIcon} alt="password icon" />
        </span>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onInputFieldChangeHandler}
          required
        />
      </div>
      <div className="formBtn">
        <button>
          {!this.props.signupProcessing && 'Signup'}
        </button>
      </div>
      <div className="formText">
        <p>Already have an account? <Link to="/signin">Signin</Link></p>
      </div>
    </form>
  </AuthContainer>
  );
}
}

export default withToastManager(Signup);
