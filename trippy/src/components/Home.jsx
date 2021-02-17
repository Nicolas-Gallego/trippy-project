import React, { Component } from "react";
import CityCard from "./CityCard";
import getHomeData from "../utils/api.js";
import NavBar from "./NavBar";
import HotelMap from "./HotelMap"

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
      <div>
        <NavBar />
        <h1>Découvrir le monde</h1>
        {this.state.cities.length !== 0 &&
          this.state.cities.map((city) => {
            console.log(city.source);
            return <CityCard cityName={city.name} image={this.state.image + city.source}/>;
          })}
      </div>
    );
  }
}
