import React from "react";
import {Switch,Route, Redirect} from "react-router-dom";
import DogList from './DogList';
import DogDetails from "./DogDetails";

const Nav = ({dogs}) =>{
    return(    
    <Switch>
        
    <Route exact path="/dogs" >
      <DogList dogs={dogs}/>
    </Route>
    
    <Route path="/dogs/:name" >
      <DogDetails dogs={dogs}/> 
    </Route>

    <Redirect to="/dogs" />
  </Switch>
    )
}

export default Nav;