/** @format */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { movieDetail } from '../../redux/movie/movie.actions';
import ModalMovie from '../ModaMovie/ModalMovie';
import css from './movieItem.module.scss';

const MovieItem = ({ movie, movieDetail, className }) => {
  const [infoMovie, setInfoMovie] = useState(false);
  const urlImg = movieSelect => `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieSelect}`;

  return !infoMovie ? (
    <article className={cx(css.movieItem, 'container-row', 'row--center', className && className)}>
      {movie.poster_path ? (
        <figure>
          <img src={urlImg(movie.poster_path)} alt={`image-movie-${movie.title}`} />
        </figure>
      ) : (
        <div>sin imagen disponible</div>
      )}
      <section
        className={cx(css.generalMovie)}
        onClick={() => {
          return setInfoMovie(true), movieDetail(movie);
        }}>
        <h3 className={cx(css.generalMovie_title)}>{movie.title}</h3>
        <p className={cx(css.generalMovie_icon)}>i</p>
      </section>
    </article>
  ) : (
    <ModalMovie movie={movie} onClose={() => setInfoMovie(false)} />
  );
};

const mapDispatchToProps = dispatch => ({
  movieDetail: movie => dispatch(movieDetail(movie)),
});

export default connect(null, mapDispatchToProps)(MovieItem);
