import React from "react";
import {NavLink} from "react-router-dom";

const ColorIndex =({colors})=>{
    
    const links = colors.map((color,idx)=>(
        <div>
            {console.log("color", color,idx)}
            <NavLink key={idx} to={`/colors/${color.color}`}>{color.color}</NavLink>
        </div>))

    return(<>
    <h1>This is the Color Factory</h1>
    <div>
        <NavLink to='/colors/new'>Add a new color here</NavLink>
    </div>
    <div>
    { links}
    
    </div>
    </>)
}
export default ColorIndex;


// console.log("colors from index", colors)
// console.log("inoming", Array.isArray(colors))
//why do I have to use Object.keys
// let newColors = JSON.parse(colors)