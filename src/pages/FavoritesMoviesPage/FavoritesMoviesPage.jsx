/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import MovieItem from '../../component/MovieItem/MovieItem';
import css from './favoriesMovies.module.scss';

const FavoritesMoviesPage = ({ listMoviesFavorites }) => {
  return (
    <section className={cx(css.moviesListFav, 'container-row', 'row--between', 'row_sm--center')}>
      <NavLink to="/">volver</NavLink>
      <h2 className={cx(css.moviesListFav_title)}>
        Mis películas - <span>{listMoviesFavorites.length}</span>
      </h2>
      {listMoviesFavorites?.map((movie, indexMovie) => (
        <MovieItem key={`movieFav-${indexMovie}-${movie.title}`} movie={movie} />
      ))}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    listMoviesFavorites: state.movie.moviesFavorite,
  };
};

export default connect(mapStateToProps, null)(FavoritesMoviesPage);
