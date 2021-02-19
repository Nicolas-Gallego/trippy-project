import React, { Component } from "react";
import getHomeData from "../utils/api.js";
import NavBar from "../components/NavBar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import HotelGallery from "../components/HotelGallery";
import CommoditiesCard from "../components/CommoditiesCard";
import HotelInfoCard from "../components/HotelInfoCard";

export default class HotelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: "",
      commodities: [],
      coords: {
        lat: 48,
        lon: 0,
      },
      image: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/1000/600/",
        },
      ],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/api/hotels/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          hotel: response.result,
          commodities: response.result.commodities,
          coords: response.result.location,
          newPrice: response.result.price,
          image: response.result.pictures.map((image) => {
            return {
              original: image,
              thumbnail: image,
            };
          }),
        });
      });
  }
  render() {
    return (
        <div>
        <NavBar />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <HotelInfoCard
              title={this.state.hotel.name}
              address={this.state.hotel.address}
              price={this.state.hotel.price}
              stars={this.state.hotel.stars}
              lat={this.state.coords.lat}
              lon={this.state.coords.lon}
            />
            <CommoditiesCard commodities={this.state.commodities} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
