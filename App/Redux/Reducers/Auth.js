import { createActions, handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

export const { setField } = createActions('SET_FIELD');

export function setFieldAction(field, value) {
  return (dispatch) => {
    dispatch(setField({ field, value }));
  };
}
const initialState = Immutable({
  email: '',
  phoneNumber: '',
});

export default handleActions({
  [setField]: (state, { payload }) => state.merge({ [payload.field]: payload.value }),
}, initialState);
