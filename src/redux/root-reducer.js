/** @format */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moviesReducer from './movie/movie.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  movie: moviesReducer,
});

export default persistReducer(persistConfig, rootReducer);
