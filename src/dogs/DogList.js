import React from 'react';
import {NavLink} from "react-router-dom";
import "./Doglist.css";

function DogList({dogs}) {
    // /dogs is the homepage and shows all  dogs
  // Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to /dogs/whiskey.

  return (<>
    {dogs.map((dog,idx)=>(<NavLink key={idx} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>))}
  </>);
}

export default DogList;
