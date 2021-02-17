import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navBarStyles navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <i className="fas fa-suitcase-rolling"></i> Trippy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <Link to="/hotels" className="nav-link">
                  Hotels
                </Link>
                <Link to="/" className="nav-link">
                  Restaurants
                </Link>
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/" className="nav-link">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
