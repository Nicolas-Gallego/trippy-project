import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export default class CityCard extends Component {
    render() {
    let source="http://via.placeholder.com/300x200"
    if (this.props.image!==""){source =this.props.image}
    if(this.props.cityName== "Paris"){ return (
        <div className="col-sm-12  col-lg-6 d-flex justify-content-center">
           <div class="card" style={{width:" 600px"}}>
               <Link to={`/${this.props.cityName}`}>
                   <img src={source} class="card-img-top" alt="..."/>
                   <p>{this.props.cityName}</p>
               </Link>
           </div>
       </div>
       )}else{ return (
         <div className="col-sm-6 col-lg-3 d-flex justify-content-center ">
            <div class="card" >
                <Link to={`/${this.props.cityName}`}>
                    <img src={source} class="card-img-top" alt="..."/>
                    <p>{this.props.cityName}</p>
                </Link>
            </div>
        </div>
        )}
    }
}
