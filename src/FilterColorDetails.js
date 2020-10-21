import React from "react";
import {useParams, Redirect} from "react-router-dom";
import ColorDetail from "./ColorDetail";

const FilterColorDetails =({colors}) => {
    console.log('filtercolordetails',colors)
    const {name} = useParams();
    
    if(name){
        const currentColor = colors.find(
            color => color.color === name
        );
        
        if(currentColor){
            return (<ColorDetail {...currentColor} />)
        } else{ 
            
            alert(`${name} not found` )
            return (<Redirect to="/colors" />)
        }

    }  
    return null;
}

export default FilterColorDetails;  