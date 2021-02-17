import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export default class CityCard extends Component {
    render() {
    let source="http://via.placeholder.com/300x200"
    if (this.props.image!==""){source =this.props.image}

        return (
         <div>
            <div class="card" style={{width:" 18rem"}}>
                <Link to={`/${this.props.cityName}`}>
                    <img src={source} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h2>{this.props.cityName}</h2>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </Link>
            </div>
        </div>
        )
    }
}
