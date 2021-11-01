/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieFeature extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    const randomize = Math.floor(Math.random() * (this._movies.length + 1));
    this.innerHTML = `
    <style>
    .featured {
      background: url("https://image.tmdb.org/t/p/original${this._movies[randomize].backdrop_path}");
      background-size: cover;
      background-position: center;
      margin: 55px 0 55px 0;
      background-color: #595260;
    }
    
    .row {
      background-color: rgba(0, 0, 0, 0.61);
      backdrop-filter: blur(3px);
    }
    
    </style>
    <div class="container-fluid featured">
        <div class="container-fluid p-5">
          <div class="row justify-content-center shadow-lg rounded py-5 my-4 text-white">
            <div class="col col-lg-3 d-flex flex-column justify-content-center">
              <h3>FEATURED MOVIE</h3>
              <h1>${this._movies[randomize].title}</h1>
              <p>${this._movies[randomize].overview}</p>
            </div>
            <div class="col col-lg-2 d-flex align-items-center">
              <img class="img-fluid" src="https://image.tmdb.org/t/p/original${this._movies[randomize].poster_path}" alt="..." />
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderFeaturedError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <style>
    .errorFeatured {
      padding: 300px;
    }
    </style>
    <div class="errorFeatured container-fluid bg-secondary">
        <div class="row justify-content-center text-white">
          <div class="col col-lg-3 d-flex flex-column justify-content-center">
            <h3>${message}</h3>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('movie-feature', MovieFeature);
