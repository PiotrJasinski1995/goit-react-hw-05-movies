import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '576d66aa4628b8c5efd23313b6537b33';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-US',
});

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?${searchParams}`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?${searchParams}`);
  return response.data;
};

export const searchMovies = async movieName => {
  const params = new URLSearchParams(searchParams);
  params.append('query', movieName);
  const response = await axios.get(`/search/movie?${params}`);
  return response.data.results;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?${searchParams}`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?${searchParams}`);
  return response.data.results;
};
