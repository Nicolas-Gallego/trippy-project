import React, { Component } from "react";
import CityCard from "../components/CityCard";
import getHomeData from "../utils/api.js";
import NavBar from "../components/NavBar";
import HotelMap from "../components/HotelMap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      image: "http://localhost:3002",
    };
  }

  componentDidMount() {
    getHomeData().then((result) => {
      this.setState({ cities: result.cities });
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Découvrir le monde</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              {this.state.cities.length !== 0 && (
                <CityCard
                  slug={this.state.cities[0].slug}
                  cityName={this.state.cities[0].name}
                  image={this.state.image + this.state.cities[0].source}
                />
              )}
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="row">
                {this.state.cities.length !== 0 &&
                  this.state.cities
                    .filter((city) => {
                      return city.name !== "Paris";
                    })
                    .map((city) => {
                      console.log(city.source);
                      return (
                        <CityCard
                          slug={city.slug}
                          cityName={city.name}
                          image={this.state.image + city.source}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
