/** @format */

import { MovieActionTypes } from './movie.types';

const INITIAL_STATE = {
  moviesResult: [],
  moviesFavorite: [],
  movieDetail: {},
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionTypes.LIST_MOVIES:
      return {
        ...state,
        moviesResult: action.payload,
      };
    case MovieActionTypes.ADD_FAVORITE:
      return {
        ...state,
        moviesFavorite: [...state.moviesFavorite, action.payload],
      };
    case MovieActionTypes.DELETE_FAVORITE:
      return {
        ...state,
        moviesFavorite: state.moviesFavorite.filter(movie => movie !== action.payload),
      };
    case MovieActionTypes.MOVIE_INFO:
      return {
        ...state,
        movieDetail: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
