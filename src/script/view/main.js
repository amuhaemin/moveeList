/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import DataSource from '../data/data-source';
import '../component/movie-feature';
import '../component/search-bar';
import '../component/movie-list';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
  const movieFeatured = document.querySelector('movie-feature');

  const renderFeatured = (results) => {
    movieFeatured.movies = results;
  };

  const fallbackFeatured = (message) => {
    movieFeatured.renderFeaturedError(message);
  };

  window.onload = async () => {
    try {
      const result = await DataSource.getFeatured();
      renderFeatured(result);
    } catch (message) {
      fallbackFeatured(message);
    }
  };

  const renderResult = (results) => {
    movieListElement.classList.add('container-fluid', 'row', 'row-cols-md-3', 'row-cols-lg-5', 'justify-content-center', 'g-4', 'my-5', 'mx-auto', 'shadow-lg', 'p-3', 'rounded');
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
