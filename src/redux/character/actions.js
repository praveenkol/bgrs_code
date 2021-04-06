import { API_URL } from '../../constants';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';
export const SET_CHARACTER_WORLD = 'SET_CHARACTER_WORLD';
export const SET_CHARACTER_MOVIES = 'SET_CHARACTER_MOVIES';
export const SET_LOADER = 'SET_LOADER';

export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id,
  };
}

function setLoading(isloading) {
    return {
      type: SET_LOADER,
      payload: isloading
    }
}

export function getMovies(id) {
  return dispatch => {
    dispatch(setLoading(true));
    return fetch(`${API_URL}/people/${id}`)
      .then(res => res.json())
      .then(profile => {
        dispatch(getCharacterMovies(profile.films));
      });
    }
}


export function setCharacterMovies(movies) {
  return {
    type: SET_CHARACTER_MOVIES,
    movies,
  };
}

export function getCharacterMovies(moviesUrls) {
  return dispatch =>
    Promise.all(moviesUrls.map(movieUrl =>
      fetch(movieUrl)
        .then(res => res.json())
    ))
    .then(movies => {
      dispatch(setLoading(false));
      dispatch(setCharacterMovies(movies));
    });
}
