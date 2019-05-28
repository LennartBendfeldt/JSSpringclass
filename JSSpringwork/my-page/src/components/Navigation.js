import React from "react";
import {NavLink} from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {

    return (
        <div class="navbar">


        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/contact">Contact</NavLink>

        </div>
    )
}   

export default Navigation;