import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link Link to="/" className="navbar-brand">
              Trippy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
                <Link to="/hotel" className="nav-link">
                  Hotel
                </Link>
                <Link to="/hotel-page" className="nav-link">
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
