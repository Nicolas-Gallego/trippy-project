import React, { Component } from 'react'
import {  Link } from "react-router-dom";

export default class HotelCard extends Component {
    render() {
    

        return (
            <div>
                <h2>{this.props.name}</h2>
                {console.log(this.props.image)}
                <img src={this.props.image}  alt="No image found" className="hotel-image" onError={(e)=>{ 
                    if (e.target.src !== this.props.image){ 
                        e.target.src="http://via.placeholder.com/300x200)" 
                        } }} />
                <h2>{this.props.stars}</h2>
                <p>{this.props.price}</p>
           
                 
                  
            </div>
        )
    }
}
