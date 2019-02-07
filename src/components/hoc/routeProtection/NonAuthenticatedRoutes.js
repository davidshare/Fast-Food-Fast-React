import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (ComposedComponent) => {
  /**
 * @class Authentication
 * @extends {Component}
 */
  class NonAuthenticatedRoutes extends Component {
    static propTypes = {
      history: PropTypes.object.isRequired,
      authenticated: PropTypes.bool.isRequired,
    }

    /**
 * @description - method to execute when the component mounts
 * @returns { undefined}
 * @memberof Authentication
 */
    componentDidMount() {
      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    /**
 *
 * @param { object } nextProps
 * @returns { undefined }
 * @memberof Authentication
 */
    shouldComponentUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/');
      }
      return true;
    }

    /**
 * @returns { jsx } jsx
 * @memberof Authentication
 */
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    ...state.signinReducer,
  });

  return connect(mapStateToProps)(NonAuthenticatedRoutes);
};
