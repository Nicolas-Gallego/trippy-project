import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css"

export default class HotelMap extends Component {
  render() {
    return (
      <div>
        <Map 
          center={[this.props.center.lat, this.props.center.lon]}
          zoom={12.5}
          scrollWheelZoom={false}
          style={{height:550}}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />{this.props.hotelMark.map((items)=>{
            return (
              <Marker position={[items.location.lat, items.location.lon]}>
            <Popup>
              {`${items.name} ${items.price} €`}
            </Popup>
          </Marker>
            )
          })}
          
        </Map>
      </div>
    );
  }
}
