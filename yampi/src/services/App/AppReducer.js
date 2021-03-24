import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {}

const reducer = handleActions({
  APP: {}
},
  INITIAL_STATE
);

export default reducer;