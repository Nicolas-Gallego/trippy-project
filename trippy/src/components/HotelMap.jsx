import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css"

export default class HotelMap extends Component {
  render() {
    return (
      <div>
        <Map 
          center={[this.props.cityLatitude, this.props.cityLongitude]}
          zoom={12.5}
          scrollWheelZoom={false}
          style={{height:550}}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
