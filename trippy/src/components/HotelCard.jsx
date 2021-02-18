import React, { Component } from 'react'
import {  Link } from "react-router-dom";

export default class HotelCard extends Component {
    render() {
        let source="http://via.placeholder.com/300x200"
    if (this.props.image!==""){source =this.props.image}

        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.image}  alt="No image found" className="hotel-image"/>
                <h2>{this.props.stars}</h2>
                <p>{this.props.price}</p>
           
                
                  
            </div>
        )
    }
}
