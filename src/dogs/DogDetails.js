import React from 'react';
import  { useParams } from "react-router-dom";
import whiskey from './whiskey.jpg';
import tubby from './tubby.jpg';
import perry from './perry.jpg';
import duke from "./duke.jpg";

function DogDetails({dogs}) {
  //return dog's details
  const { name } = useParams();
  // let name = "Duke"
  const dog = dogs.filter(function(doggo){return doggo["name"] === name})[0];  
  // const dogPic = require(`${dog.src}`)
  const pic = dog.src
  console.log(pic)
  
  return (<>
    <h1>Hi! I'm {dog.name}</h1>
    <img src={duke} alt={dog.name}></img>
    <div>I'm {dog.age} years old</div>
    <div>Here are some fun facts about me:</div>
    <ul>
      {dog.facts.map(fact =>(<li>{fact}</li>))}
    </ul>
  </>)
}

export default DogDetails;
