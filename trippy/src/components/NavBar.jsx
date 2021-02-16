import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link Link to="/" class="navbar-brand">
              Trippy
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
                <Link to="/hotel" class="nav-link">
                  Hotel
                </Link>
                <Link to="/hotel-page" class="nav-link">
                  HotelPage
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
