import React, { Component } from 'react';

import AuthContainer from '../../containers/authContainer';
import '../../styles/authForms.css';
import lockIcon from '../../assets/icons/lock.svg';
import envelopeIcon from '../../assets/icons/envelope.svg';

/**
 * @class Signup
 * @extends {Component}
 */
class Signup extends Component {
  state = {
    email: '',
    password: '',
  }

/**
 * @memberof Signup
 * @description - method to handle user click for signup
 * @param { object } event - the event object
 * @returns { null } - returns nothing
 */
signupHandler = (event) => {
  event.preventDefault();
}

/**
   * @description method that renders the signin componentDidMount = () => {
   * @returns { JSX } Jsx for login component
  * */
render() {
  return (
      <AuthContainer imgBackground="signinBackground">
    <form className="authForm signinForm" onSubmit={this.signupHandler} >
      <div className="formTitle">
        <h2>Fast Food Fast</h2>
        <p>Signin quickly! We have a surprise for you.</p>
      </div>
      <div className="formControl">
        <span className="form-icon">
          <img src={envelopeIcon} alt="email icon" />
        </span>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
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
        />
      </div>
      <div className="formBtn">
        <button>
          Signin
        </button>
      </div>
      <div className="formText">
        <p>Already have an account? Signup</p>
      </div>
    </form>
  </AuthContainer>
  );
}
}


export default Signup;
