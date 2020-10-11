/** @format */

import { MovieActionTypes } from './movie.types';
import { getDataApiMovies } from './../../config/service';

export const initApi = () => ({
  type: MovieActionTypes.REQUEST,
});

export const listMovies = moviesList => ({
  type: MovieActionTypes.LIST_MOVIES,
  payload: moviesList,
});

export const addFavoriteMovie = movie => ({
  type: MovieActionTypes.ADD_FAVORITE,
  payload: movie,
});

export const deleteFavoriteMovie = movie => ({
  type: MovieActionTypes.DELETE_FAVORITE,
  payload: movie,
});

export const movieDetail = movie => ({
  type: MovieActionTypes.MOVIE_INFO,
  payload: movie,
});

export const getListMovies = movies => dispatch => {
  dispatch(initApi());
  getDataApiMovies(movies)
    .then(data => dispatch(listMovies(data)))
    .catch(error => error);
};
