import { createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import Rehydration from '../Services/Rehydration';
import ReduxPersist from '../Config/ReduxPersist';
import ScreenTracking from './ScreenTrackingMiddleware';

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [Thunk];
  const enhancers = [];

  /* ------------- Navigation Middleware ------------ */
  const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  );
  middleware.push(navigationMiddleware);

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking);


  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, composeWithDevTools(...enhancers));

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  return {
    store,
  };
};
