import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CityCard extends Component {
  
  render() {
    let source = "http://via.placeholder.com/300x200";
    if (this.props.image !== "") {
      source = this.props.image;
    }
    return (
      <>
        {this.props.cityName == "Paris" ? (
          <>
          <Link to={`/hotels/${this.props.slug}`}>
            <img src={source} alt="" className="cityImg" />
            <p>{this.props.cityName}</p>
            </Link>
          </>
        ) : (
          <>
            <div className="col-6">
            <Link to={`/hotels/${this.props.slug}`}>
              <img src={source} alt="..." className="cityImg2 " />
              <p>{this.props.cityName}</p>
              </Link>
            </div>
          </>
        )}
      </>
    );
    
  }
}
