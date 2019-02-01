import { combineReducers } from 'redux';
import signupReducer from './authReducers/signupReducer';
import signinReducer from './authReducers/signinReducer';


export default combineReducers({
  signupReducer,
  signinReducer,

});
