import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import CityCard from '../Components/CityCard';
import HotelMap from '../Components/HotelMap';
import HotelCard from '../Components/HotelCard';
import getHomeData from "../utils/api.js";
import NavBar from "../Components/NavBar";

export default class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
            hotelURL: 'http://localhost:3002/api/hotels/city/<city>'
        }
    }

    componentDidMount() {
        this.loadHotel();
    }
    loadHotel() {
        console.log('loadHotel');
        fetch(`http://localhost:3002/api/hotels/city/${this.state.hotels}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.setState({
                    hotels: response.results,

                })
                console.log(this.state.hotels);
            })
    }


    render() {
        return (
            <div>

                <h1>Hotel</h1>
                {this.state.hotels.length !== 0 &&
                    this.state.hotels.map((cityHotelList) => {

                        return (
                            <div>
                                <HotelCard cityHotel={cityHotelList.pictures} />

                                {/* <HotelCard hotelLocation={cityHotelList.location} /> */}
                            </div>
                        )
                    })}

            </div>
        )
    }
}
