import React from "react";
import {useParams} from "react-router-dom";
import ColorDetail from "./ColorDetail";

const FilterColorDetails =({colors}) => {
    const {name} = useParams();
    if(name){
        const currentColor = colors.find(
            color => color.name === name
        );
        return <ColorDetail color={currentColor} />
    }  
    return null;
}

export default FilterColorDetails;