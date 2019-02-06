import { combineReducers } from 'redux';
import signupReducer from './authReducers/signupReducer';
import signinReducer from './authReducers/signinReducer';
import viewMenuReducer from './menuReducers/viewMenuReducer';
import orderReducer from './orders/orderReducer';

export default combineReducers({
  signupReducer,
  signinReducer,
  viewMenuReducer,
  orderReducer,
});
