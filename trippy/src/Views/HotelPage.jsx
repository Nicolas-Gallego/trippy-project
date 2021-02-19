import React, { Component } from "react";
import getHomeData from "../utils/api.js";
import NavBar from "../components/NavBar";

export default class HotelPage extends Component {
   constructor(props) {
        super(props)
        this.state = {
      
    }
}
componentDidMount() {
    console.log('loadHotel');
    let url = `http://localhost:3002/api/hotels/${this.props.match.params.id}`
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            this.setState({
                // hotels: response.results,
                // center: response.center,

            })
            console.log("hotel  :");
        })
}

    render() {
        return (
            <div>
                <p>Hotel page</p>
            </div>

        );
    }
}
