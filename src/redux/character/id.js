import { SET_CURRENT_CHARACTER } from './actions';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHARACTER:
      return action.id;
    default:
      return state;
  }
};

export default reducer;