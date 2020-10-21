import React from "react";

const ColorDetail =({color})=>{
    //color should be object from FilterColorDetail {color: "","hex":""}
    return(
    <div className="ColorDetail" style={{backgroundColor:color.hex}}>
        I am {color.color}
    </div>
    )
}
export default ColorDetail;