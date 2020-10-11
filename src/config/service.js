/** @format */

const API_KEY = 'd87bbdba90fe9ee2ccb9b9ba6bd9ab00';
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
const API_URL_TRAILER = movieId =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=es-US`;

const getDataApiMovies = async movie => {
  try {
    const apiData = await fetch(`${API_URL}&language=es-US&query=${movie}`);
    return apiData.json();
  } catch (error) {
    console.log('error', error);
  }
};

const getDataApiMovieTrailer = async movieId => {
  try {
    const apiDataDetail = await fetch(API_URL_TRAILER(movieId));
    return apiDataDetail.json();
  } catch (error) {
    console.log('error', error);
  }
};

export { getDataApiMovies, getDataApiMovieTrailer };
