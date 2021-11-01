/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `   
          <div class="col">
            <div class="card h-100">
              <img src="https://image.tmdb.org/t/p/original/${this._movie.poster_path}" class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${this._movie.title} (${this._movie.release_date.slice(0, 4)})</h5>
              </div>
            </div>
          </div>
          `;
  }
}

customElements.define('movie-item', MovieItem);
