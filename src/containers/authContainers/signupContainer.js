import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as signupActionCreators from '../../actions/authActions/signupActions';
import Signup from '../../components/auth/Signup';

export const mapStateToProps = state => ({
  ...state.signupReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(
    signupActionCreators,
    dispatch,
  );

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

export default SignUpContainer;
