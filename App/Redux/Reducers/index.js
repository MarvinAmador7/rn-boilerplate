import { combineReducers } from 'redux';
import { reducer } from './NavigationRedux';
import startupReducer from './StartupRedux';

export default combineReducers({
  nav: reducer,
  startup: startupReducer,
});
