import React, { Component } from "react";
import getHomeData from "../utils/api.js";
import NavBar from "../components/NavBar";

export default class Error extends Component {


    render() {
        return (
            <div>
                <NavBar/>
                <p>Error 404</p>
            </div>

        );
    }
}
