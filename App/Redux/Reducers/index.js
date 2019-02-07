import { combineReducers } from 'redux';
import { reducer } from './NavigationRedux';
import startupReducer from './StartupRedux';
import Auth from './Auth';

export default combineReducers({
  nav: reducer,
  startup: startupReducer,
  auth: Auth,
});
