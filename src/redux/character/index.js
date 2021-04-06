import { combineReducers } from 'redux';
import id from './id';
import movies from './movies';

export default combineReducers({
  id,
  movies,
});
