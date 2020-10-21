import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css";

const Nav =()=>{
    return(
    <div className="Nav">
        <NavLink to='/colors'>Home </NavLink>
        
        <NavLink to='/colors/new'>New Color Form</NavLink>    
    </div>
    )
}
export default Nav;