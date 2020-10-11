/** @format */

import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FavoritesMoviesPage = lazy(() => import('./pages/FavoritesMoviesPage/FavoritesMoviesPage'));

const App = () => {
  return (
    <Switch>
      <Suspense
        fallback={<Loader type="Puff" color="#ff2961" height={100} width={100} timeout={3000} />}>
        <Route path="/" component={HomePage} />
        <Route path="/favorites_movies" component={FavoritesMoviesPage} />
      </Suspense>
    </Switch>
  );
};

export default App;
