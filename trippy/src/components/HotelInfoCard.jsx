import React, { Component } from 'react'
import StarsRating from "stars-rating"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class HotelInfoCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                   <h5><strong>{this.props.title}</strong></h5>
                    <p>Adresse : {this.props.address}</p>
                    <div className="row">
                        <div className="col-6">
                            <p>Prix : {this.props.price}€ / nuit</p>
                        </div>
                        <div className="col-6">
                            <StarsRating
                                count={5}
                                value={this.props.stars}
                                size={24}
                                edit={false}
                                color2={'#ffd700'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Map center={[this.props.lat, this.props.lon]} zoom={12} scrollWheelZoom={false} style={{ height: "200px" }}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[this.props.lat, this.props.lon]}>
                                    <Popup>
                                        <b>{this.props.title}</b><br />
                                            Adresse: {this.props.address}
                                            <br />
                                            {`${this.props.price} €/nuit`}
                                    </Popup>
                                </Marker>
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}