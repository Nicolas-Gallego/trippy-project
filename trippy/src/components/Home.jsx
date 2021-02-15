import React, { Component } from "react";
import CityCard from "./CityCard";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    getHomeData();
  }

  render() {
    return (
      <div>
        <h1>Découvrir le monde</h1>
       {this.state.cities.length !== 0 ? this.state.cities.map((city) => {
           return (
               <CityCard/>
           )
       })}

      </div>
    );
  }
}
