import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import { Link } from 'react-router-dom';

import AuthContainer from '../hoc/AuthContainer';
import '../../styles/authForms.css';
import lockIcon from '../../assets/icons/lock.svg';
import envelopeIcon from '../../assets/icons/envelope.svg';
import {
  SIGNIN_ERROR_MSG,
  SIGNIN_SUCCESS_MSG,
  toastSuccessObj,
  toastErrorObj,
} from '../../helpers/constants';

/**
 * @class Signin
 * @extends {Component}
 */
export class Signin extends Component {
  state = {
    email: '',
    password: '',
  }

  static propTypes = {
    signinUser: PropTypes.func,
    history: PropTypes.object,
    signinProcessing: PropTypes.bool,
    toastManager: PropTypes.object.isRequired,
    signinError: PropTypes.bool.isRequired,
    signinSuccess: PropTypes.bool.isRequired,
  }

/**
 * @memberof Signin
 * @description - method to handle user click for signin
 * @param { object } event - the event object
 * @returns { null } - returns nothing
 */
signinHandler = (event) => {
  event.preventDefault();
  const userObject = {
    email: this.state.email,
    password: this.state.password,
  };
  this.props.signinUser(userObject, this.props.history);
}

/**
 * @description - method to handle change of input fields
 * @param { object} event - the event object
 * @memberof Signin
 * @returns { undefined }
 */
onInputFieldChangeHandler = (event) => {
  event.preventDefault();
  switch (event.target.name) {
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
 * @memberof Signin
 */
shouldComponentUpdate(nextProps) {
  if (this.props.signinError !== nextProps.signinError
    && nextProps.signinError === true) {
    this.props.toastManager.add(SIGNIN_ERROR_MSG, toastErrorObj);
  }

  if (this.props.signinSuccess !== nextProps.signinSuccess
    && nextProps.signinSuccess === true) {
    this.props.toastManager.add(SIGNIN_SUCCESS_MSG, toastSuccessObj);
  }

  return true;
}

/**
   * @description method that renders the signin componentDidMount = () => {
   * @returns { JSX } Jsx for login component
  * */
render() {
  return (
      <AuthContainer imgBackground="signinBackground">
    <form
      className="authForm signinForm"
      onSubmit={this.signinHandler}
      id="signinForm"
    >
      <div className="formTitle">
      <h2><Link to="/">Fast Food Fast</Link></h2>
        <p>You can't go hungry when we've got you covered</p>
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
      Signin
    </button>
      </div>
      <div className="formText">
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </form>
  </AuthContainer>
  );
}
}

export default withToastManager(Signin);
