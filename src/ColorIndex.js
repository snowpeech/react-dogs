import React from "react";
import {NavLink} from "react-router-dom";

const ColorIndex =(props)=>{
    const colors = props.colors;
    console.log("colors from index", typeof colors, colors)
    console.log("inoming", typeof colors)
    //why do I have to use Object.keys
    // let newColors = JSON.parse(colors)
    const links = Object.keys(colors).map((color,idx)=>(
        <div>
            {console.log("color",color,idx, typeof color)}
            <NavLink key={idx} to={`/colors/${color.name}`}>{color.name}</NavLink>
        </div>))

    return(<>
    <h1>This is the Color Index</h1>
    <div>
        <NavLink to='/colors/new'>Add a new color here</NavLink>
    </div>
    <div>
    { links}
    
    </div>
    <div></div>

    </>)
}
export default ColorIndex;