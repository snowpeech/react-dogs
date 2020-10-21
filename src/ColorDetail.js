import React from "react";
import "./ColorDetail.css"

const ColorDetail =({color, hex})=>{
    //color should be object from FilterColorDetail {color: "","hex":""}
    console.log(color)
    return(
<div className="ColorDetail" style={{ backgroundColor: hex }}>
<h1>I am {color}</h1>
</div> 
        )
}
export default ColorDetail;
