import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import ReduxPersist from '../Config/ReduxPersist';
import { startup as startupAction } from '../Redux/Reducers/StartupRedux';

const updateReducers = (store: Object) => {
  const { reducerVersion } = ReduxPersist;

  // You can dispatch startup actions here
  const startup = () => store.dispatch(startupAction());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      // Purge store
      persistStore(store, null, startup).purge();
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    } else {
      persistStore(store, null, startup);
    }
  }).catch(() => {
    persistStore(store, null, startup);
    AsyncStorage.setItem('reducerVersion', reducerVersion);
  });
};

export default { updateReducers };
