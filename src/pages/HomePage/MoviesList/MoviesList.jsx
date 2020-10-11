/** @format */

import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import MovieItem from '../../../component/MovieItem/MovieItem';
import css from './movieList.module.scss';

const MoviesList = ({ moviesList }) => {
  return (
    <section className={cx(css.moviesList, 'container-row', 'row--between', 'row_sm--center')}>
      {moviesList ? (
        moviesList.map((movie, indexMovie) => {
          return (
            <MovieItem key={`movie-${indexMovie}-${movie.title}`} movie={movie} className={cx()} />
          );
        })
      ) : (
        <p>No encontramos resultados</p>
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    moviesList: state.movie.moviesResult,
  };
};

export default connect(mapStateToProps, null)(MoviesList);
