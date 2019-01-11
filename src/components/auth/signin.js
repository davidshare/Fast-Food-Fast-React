import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthContainer from '../../containers/authContainer';
import '../../styles/authForms.css';
import lockIcon from '../../assets/icons/lock.svg';
import envelopeIcon from '../../assets/icons/envelope.svg';
import signinUser from '../../actions/siginActions';

/**
 * @description this is the class component for user signin
 */
class Signin extends Component {
  /**
   * @description - checks if the component has mounted and performs actions
   * @returns {undefined}
   */
  signinHandler() {
    this.props.signinUser();
  }

  /**
   * @description method that renders the signin componentDidMount = () => {
   * @returns { JSX } Jsx for login component
  * */
  render() {
    return (
      <AuthContainer imgBackground="signinBackground">
    <form className="authForm signinForm" onSubmit={this.props.signinUser} >
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
          value={this.props.email}
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
          value={this.props.password}
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

Signin.propTypes = {
  email: PropTypes.sting.isRequired,
  password: PropTypes.string.isRequired,
  signinUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  email: state.signin.email,
  password: state.signin.password,
});

const mapDispatchToProps = {
  signinUser,
};

export default connect(mapStateToProps, {})(Signin);
