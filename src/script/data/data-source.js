/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */
class DataSource {
  static async searchMovie(keyword) {
    const apiKey = '5d41f7549c78b46e9a3693e57918cf1c';
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=1&adult=false`);
    const responseJson = await response.json();
    if (responseJson.total_results) {
      return Promise.resolve(responseJson.results);
    }
    return Promise.reject(`${keyword} is not found`);
  }

  static async getFeatured() {
    const apiKey = '5d41f7549c78b46e9a3693e57918cf1c';
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&adult=false`);
    const responseJson = await response.json();
    if (responseJson.results) {
      return Promise.resolve(responseJson.results);
    }
    return Promise.reject('No Featured Moovie');
  }
}

export default DataSource;
