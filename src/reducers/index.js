import { combineReducers } from 'redux';
import signinReducers from './signinReducers';


export default combineReducers({
  sampleReducer: () => 'sample reducer',
  signinReducers,
});
