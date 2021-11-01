/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import 'bootstrap/dist/css/bootstrap.min.css';
import './movie-item';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._movies.forEach((movie) => {
      if (movie.poster_path) {
        const movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        this.appendChild(movieItemElement);
      }
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <style>
    .errorFeatured {
      padding: 150px;
    }
    </style>
    <div class="errorFeatured container-fluid bg-secondary">
        <div class="row justify-content-center text-white">
          <div class="col col-lg-5 d-flex flex-column justify-content-center">
            <h3>${message}</h3>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('movie-list', MovieList);
