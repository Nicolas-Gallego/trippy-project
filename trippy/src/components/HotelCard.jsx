import React, { Component } from 'react'
import { Link } from "react-router-dom";
import StarsRating from 'stars-rating';
import { render } from 'react-dom';

// const ratingChanged = (newRating) => {
//     console.log(this.ratingChanged)
// }
export default class HotelCard extends Component {

    render() {
        let source = "http://via.placeholder.com/300x200"
        if (this.props.image !== "") { source = this.props.image }

        return (

            <div class="card-group hotelCardGroup">

                <div class="card">
                    <img src={this.props.image} class="card-img-top hotelImg" alt="No image found" 
                    onError={(e) => {
                        e.target.onerror=null
                        e.target.src = "http://via.placeholder.com/300x200"
                    }}
                    />
                    <div class="card-body">
                        <Link to={"../hotel/" + this.props.id}>{this.props.name}</Link>
                        <div className="priceStar">
                            <p class="card-text">{this.props.price} € </p>
                            <p class="card-text">
                                <StarsRating
                                    count={5}
                                    onChange={this.props.stars}
                                    size={24}
                                    color2={'#ffd700'}
                                    value={this.props.stars}
                                    edit = {false}
                                />
                                </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
