import React, { Component } from 'react'

export default class CityCard extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.cityName}</h2>
            </div>
        )
    }
}
