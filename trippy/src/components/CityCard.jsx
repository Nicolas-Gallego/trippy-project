import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export default class CityCard extends Component {
    render() {
    let source="http://via.placeholder.com/300x200"
    if (this.props.image!==""){source =this.props.image}

        return (
            <div>
            <Link to={`/${this.props.cityName}`}>
                <h2>{this.props.cityName}</h2>
                <img src={source}  alt="..." />
                
            </Link>
                
                  
            </div>
        )
    }
}
