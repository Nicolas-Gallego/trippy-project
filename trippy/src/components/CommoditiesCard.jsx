import React, { Component } from 'react'


export default class CommoditiesCard extends Component {
    render() {
        return (
            <div>
                <div className="card mt-3 mb-3">
                    <div className="card-header headCommo text-light">
                        <b>Commoditées</b>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.props.commodities.length > 0 &&
                                this.props.commodities.map((commodities, index) => {
                                    return (
                                        <div className="col-6">
                                            <p><i class="fas fa-check-circle"></i> {commodities}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}