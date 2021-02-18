import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CityCard extends Component {
  //   render() {
  //     let source = "http://via.placeholder.com/300x200";
  //     if (this.props.image !== "") {
  //       source = this.props.image;
  //     }
  //     if (this.props.cityName == "Paris") {
  //       return (
  //         <div className=" col-sm-12  col-lg-6">
  //           <Link to={`/${this.props.cityName}`}>
  //             <img src={source} class="card-img-top" alt="..." />
  //             <p>{this.props.cityName}</p>
  //           </Link>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className=" col-sm-6  col-lg-3">
  //           <div className="row">
  //             <div className=" col-sm-6  col-lg-1"></div>
  //             <Link to={`/${this.props.cityName}`}>
  //               <img src={source} class="card-img-top" alt="..." />
  //               <p>{this.props.cityName}</p>
  //             </Link>
  //           </div>
  //         </div>
  //       );
  //     }
  //   }
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
    // let source = "http://via.placeholder.com/300x200";
    // if (this.props.image !== "") {
    //     source = this.props.image
    // }
    // return (
    //     {this.props.cityName == "paris"}
    // )
  }
}
