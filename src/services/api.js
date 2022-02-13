import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'adf034e2dfe8e0fada717e58b9449dc8';

const fetchTrendingFilms = async () => {
  const res = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return res.data;
};

const fetchMovieById = async id => {
  const res = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data;
};

const fetchMoviesByQuery = async query => {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return res.data;
};

const fetchMovieCast = async id => {
  const res = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

const fetchMovieReviews = async id => {
  const res = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export {
  fetchTrendingFilms,
  fetchMovieById,
  fetchMoviesByQuery,
  fetchMovieCast,
  fetchMovieReviews,
};
