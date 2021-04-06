import { SET_CHARACTER_MOVIES, SET_LOADER } from './actions';

const initialState = {
  movies: [],
  loader: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_MOVIES:
      return {...state, movies: action.movies.sort((ma, mb) =>
        ma.episode_id - mb.episode_id
      )};
      case SET_LOADER:
      return {...state, loader: action.payload}
    default:
      return state;
  }
};

export default reducers;