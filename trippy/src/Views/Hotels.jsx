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

                })
                console.log("hotel==", this.state.hotels);
            })
    }
    render() {
        return (
            <div>
                <p>Hotels</p>
                <div>
                    {/* {this.state.hotels.length !== 0 ?  */}
                    {this.state.hotels.map((cityHotelList) => {
                        return (
                            <div>
                            <HotelCard image = {cityHotelList.pictures[0]}
                                       name ={cityHotelList.name} 
                                       stars = {cityHotelList.stars}
                                       price = {cityHotelList.price}/>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {/* <HotelMap /> */}
                </div>

            </div>
        )
    }
}
