/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <div class="search-bar" id="searchBar">
        <div class="d-flex justify-content-center my-5">
          <input id="searchElement" type="text" class="form-control w-50 me-5 rounded-pill" placeholder="Search Movie Title" aria-label="Search Movie Title" />
          <button class="btn btn-outline-secondary rounded-pill" type="button" id="searchButtonElement">Search</button>
        </div>
      </div>
      `;
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
