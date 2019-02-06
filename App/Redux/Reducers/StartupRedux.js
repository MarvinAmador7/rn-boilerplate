import { createActions, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

export const { startup } = createActions('STARTUP');

const initialState = Immutable({
  startup: false,
});

export default handleActions({
  [startup]: state => state.merge({ startup: true }),
}, initialState);
