/** @format */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { getDataApiMovieTrailer } from '../../config/service';
import { addFavoriteMovie, deleteFavoriteMovie } from '../../redux/movie/movie.actions';
import Button from './../Button/Button';
import css from './modalMovie.module.scss';

const ModalMovie = ({ movie, addFavorite, deleteFavorite, onClose }) => {
  const [optionFavorite, setOptionFavorite] = useState(false);
  const [trailerMovies, setTrailerMovies] = useState([]);

  const getTrailerMovies = async () => {
    try {
      const dataTrailers = await getDataApiMovieTrailer(movie.id);
      setTrailerMovies(dataTrailers);
    } catch (error) {
      console.error('error search', error);
    }
  };

  useEffect(() => {
    if (trailerMovies.length === 0) {
      getTrailerMovies();
    }
  }, [trailerMovies]);

  console.log('trailerMovies', trailerMovies);

  return (
    <section className={cx(css.modal, 'container-row', 'row--center', 'row_align--center')}>
      <article className={cx(css.modalContent)}>
        <header className={cx(css.modalHeader, 'container-row', 'row--between')}>
          <h3 className={cx(css.modalHeader_title)}>{movie.title}</h3>
          <button className={cx(css.modalHeader_close)} onClick={() => onClose()}>
            x
          </button>
        </header>
        <section className={cx(css.detailMovie, 'container-row')}>
          <div className={cx(css.infoMovie)}>
            <p className={cx(css.infoMovie_points)}>
              Puntuación:
              <span className={css.bold}>{movie.vote_average}</span>
            </p>
            <p className={cx(css.infoMovie_description)}>{movie.overview}</p>
            <div className={cx('container-row', 'row_align--end')}>
              {trailerMovies &&
                trailerMovies.results &&
                trailerMovies.results[0] &&
                trailerMovies.results[0].key && (
                  <figure className={cx(css.infoMovie_video)}>
                    <iframe
                      className={cx(css.boxVideo)}
                      title={`https://www.youtube.com/embed/` + trailerMovies.results[0].key}
                      src={`https://www.youtube.com/embed/` + trailerMovies.results[0].key}
                      allowFullScreen
                    />
                  </figure>
                )}
              {optionFavorite ? (
                <Button
                  className={cx(css.infoMovie_btn)}
                  onClick={() => {
                    setOptionFavorite(true);
                    deleteFavorite(movie);
                    onClose();
                  }}>
                  - Eliminar de favoritos
                </Button>
              ) : (
                <Button
                  className={cx(css.infoMovie_btn)}
                  onClick={() => {
                    setOptionFavorite(true);
                    addFavorite(movie);
                    onClose();
                  }}>
                  + Agregar a favoritos
                </Button>
              )}
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavorite: movie => dispatch(addFavoriteMovie(movie)),
  deleteFavorite: movie => dispatch(deleteFavoriteMovie(movie)),
});

export default connect(null, mapDispatchToProps)(ModalMovie);
