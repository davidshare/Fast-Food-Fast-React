import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as signinActionCreators from '../../actions/authActions/signinActions';
import Signin from '../../components/auth/Signin';

export const mapStateToProps = state => ({
  ...state.signinReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(
    signinActionCreators,
    dispatch,
  );

const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);

export default SigninContainer;
