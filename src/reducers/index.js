import { combineReducers } from 'redux';
import signupReducer from './authReducers/signupReducer';
import signinReducer from './authReducers/signinReducer';
import viewMenuReducer from './menuReducers/viewMenuReducer';


export default combineReducers({
  signupReducer,
  signinReducer,
  viewMenuReducer,
});
