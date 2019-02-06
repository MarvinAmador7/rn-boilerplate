import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import ReduxPersist from '../Config/ReduxPersist';
import reducers from './Reducers';

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  const { store } = configureStore(finalReducers);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./Reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
