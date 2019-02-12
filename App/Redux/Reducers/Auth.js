import { createActions, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { AsyncStorage } from 'react-native';
import { Auth, API } from 'aws-amplify';
import { getRandomString } from '../../lib/utils';
import { createUser } from '../../Graphql/user';

export const {
  setField,
  setUser,
  setPendingConfirm,
  resetAuth,
} = createActions(
  'SET_FIELD',
  'SET_USER',
  'SET_PENDING_CONFIRM',
  'RESET_AUTH',
);

let globalUser;

export function setFieldAction(field, value) {
  return (dispatch) => {
    dispatch(setField({ field, value }));
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      dispatch(resetAuth());
      await Auth.signOut();
      await AsyncStorage.clear();
      dispatch({ type: 'Navigation/NAVIGATE', routeName: 'SignInScreen' });
    } catch (error) {
      console.log('cant logout', error);
    }
  };
}

export function signUp() {
  return async (dispatch, getState) => {
    const { email } = getState().auth;
    try {
      if (email) {
        const user = await Auth.signUp({
          username: email,
          password: getRandomString(),
          attributes: { email },
        });

        const variables = {
          data: {
            identifier: user.userSub,
            identifierType: 'COGNITO',
          },
        };

        await API.graphql({ query: createUser, variables });

        dispatch(setUser(user));
        dispatch({ type: 'Navigation/NAVIGATE', routeName: 'SignInScreen' });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function confirmCodeIntent() {
  return async (dispatch, getState) => {
    const { confirmationCode } = getState().auth;
    try {
      if (confirmationCode) {
        const userObject = await Auth.sendCustomChallengeAnswer(globalUser, confirmationCode);

        await Auth.currentSession();
        dispatch(setUser(userObject));

        dispatch({ type: 'Navigation/NAVIGATE', routeName: 'App' });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function signIn() {
  return async (dispatch, getState) => {
    const { email } = getState().auth;
    try {
      if (email) {
        const user = await Auth.signIn(email);

        globalUser = user;

        dispatch(setUser(user));
        dispatch(setPendingConfirm());
      }
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        dispatch(setPendingConfirm());
      }
    }
  };
}

const initialState = Immutable({
  email: '',
  phoneNumber: '',
  confirmationCode: '',
  pendingConfirm: false,
  user: {},
});

export default handleActions({
  [setField]: (state, { payload }) => state.merge({ [payload.field]: payload.value }),
  [setUser]: (state, { payload }) => state.merge({ user: payload }),
  [resetAuth]: state => state.replace({
    email: '',
    phoneNumber: '',
    confirmationCode: '',
    pendingConfirm: false,
    user: {},
  }),
  [setPendingConfirm]: state => state.merge({ pendingConfirm: true }),
}, initialState);
