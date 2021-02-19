import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';

import CityCard from '../components/CityCard';
import HotelMap from '../components/HotelMap';
import HotelCard from '../components/HotelCard';
import getHomeData from "../utils/api.js";
import NavBar from "../components/NavBar";


export default class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
            image: "http://localhost:3002",
            //  hotelURL: 'http://localhost:3002/api/hotels/city/<city>'
            center: {
                lat: 0,
                lon: 0,
            },
        }
    }

    componentDidMount() {
        console.log('loadHotel');
        let url = `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.setState({
                    hotels: response.results,
                    center: response.center,

                })
                console.log("hotel==", this.state.hotels);
            })
    }
    render() {
        console.log("Map of the City center :", this.state.center)
        let newLat = this.state.center.lat;
        let newLong = this.state.center.lon;
        console.log("City center lat :", newLat);
        console.log("City center long :", newLong);
        return (

            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-sm-8 col-lg-6">
                                <div className="row">
                                    {this.state.hotels.map((cityHotelList) => {
                                        return (
                                            <div className=" col-12 col-sm-6  col-lg-5 hotelCard">
                                                <HotelCard image={cityHotelList.pictures[0]}
                                                    name={cityHotelList.name}
                                                    stars={cityHotelList.stars}
                                                    price={cityHotelList.price} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className=" col-sm-12 col-lg-5 hotelCard">
                                <HotelMap cityLatitude={newLat}
                                    cityLongitude={newLong} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
