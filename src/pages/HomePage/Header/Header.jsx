/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import cx from 'classnames';
import { getDataApiMovies } from '../../../config/service';
import { listMovies } from '../../../redux/movie/movie.actions';
import css from './header.module.scss';
import logo from './../../../assets/images/logo-complete.svg';
import logoResponsive from './../../../assets/images/logo.svg';
import Input from '../../../component/Input/Input';
import Button from '../../../component/Button/Button';

const Header = () => {
  const [value, setValue] = useState('');
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const movieSearch = async event => {
    try {
      setLoader(true);
      event.preventDefault();
      const dataMovies = await getDataApiMovies(value);
      dispatch(listMovies(dataMovies.results));
      setLoader(false);
    } catch (error) {
      console.error('error search', error);
    }
  };

  if (loader) {
    return <Loader type="Puff" color="#ff2961" height={100} width={100} timeout={3000} />;
  }

  return (
    <header className={cx(css.header, 'container-row', 'row--between', 'row_align--center')}>
      <figure className={cx(css.header_logo, 'col_2')} onClick={() => history.push('/')}>
        <img
          src={logo}
          alt="Logo texto Movies escalab"
          className={cx(css.imgLogo, 'col_hidden_sm')}
        />
        <img
          src={logoResponsive}
          alt="Logo texto Movies escalab"
          className={cx(css.imgLogo, 'col_hidden', 'col_show_sm')}
        />
      </figure>
      <nav className={cx(css.nav, 'col_6', 'col_sm_8')}>
        <div className={cx('container-row', 'row_align--center', 'row_sm--end')}>
          <Input
            className={cx('col_3', 'col_sm_6')}
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Encuentra tu película"
          />
          <Button
            onClick={e => movieSearch(e)}
            className={cx(css.nav_btn)}
            disabled={value === '' || !value}>
            Buscar
          </Button>
          <NavLink className={cx(css.nav_link)} to="/favorites_movies">
            PELICULAS FAVORITAS
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
