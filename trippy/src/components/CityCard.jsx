import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export default class CityCard extends Component {
    render() {
    let source="http://via.placeholder.com/300x200"
    if (this.props.image!==""){source =this.props.image}
    if(this.props.cityName== "Paris"){ return (
        <div className="col-12  col-md-6">
           <div class="card" style={{width:" 35rem"}}>
               <Link to={`/${this.props.cityName}`}>
                   <img src={source} class="card-img-top" alt="..."/>
                   <p>{this.props.cityName}</p>
               </Link>
           </div>
       </div>
       )}else{ return (
         <div className="col-6 col-md-3 ">
            <div class="card" style={{width:" 18rem",margin:"0"}}>
                <Link to={`/${this.props.cityName}`}>
                    <img src={source} class="card-img-top" alt="..."/>
                    <p>{this.props.cityName}</p>
                </Link>
            </div>
        </div>
        )}
    }
}
