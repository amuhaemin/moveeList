/* eslint-disable linebreak-style */
import 'bootstrap/dist/css/bootstrap.css';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .navbar {
            background-color: #2C2E43;
          }
        </style>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <div class="container d-flex justify-content-between">
            <a class="navbar-brand" href="/"> MOVEELIST </a>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#searchBar">Search</a>
              </li>
            </ul>
          </div>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
