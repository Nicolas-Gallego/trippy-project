import React, { Component } from "react";
import CityCard from '../components/CityCard';
import getHomeData from "../utils/api.js";

import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import HotelMap from "../components/HotelMap"


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      image: "http://localhost:3002",
    };
  }

  componentDidMount() {
    getHomeData()
    .then((result) =>
   { this.setState({cities: result.cities})});
  }


  render() {
    return (
      <div >
        <NavBar />
        <h1>Découvrir le monde</h1>
        <div className="container">
          <div className="row  ">
            {this.state.cities.length !== 0 &&
              this.state.cities.map((city) => {
                console.log(city.source);
                return <CityCard cityName={city.name} image={this.state.image + city.source}/>;
              })}
          </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3 bg-warning">Colonne 2 de niveau 1</div>
                <div class="col-9 ">
                    <div class="row">
                        <div class="col-6 bg-success">Sous colonne 1 (niveau 2)</div>
                        <div class="col-6 bg-success">Sous colonne 2 (niveau 2)</div>
                        <div class="col-6 bg-success">Sous colonne 3 (niveau 2)</div>
                        <div class="col-6 bg-success">Sous colonne 3 (niveau 2)</div>
                    </div>
                </div>
                
            </div>
        </div>

      </div>
    );
  }
}
