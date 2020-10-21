import React,{useState} from 'react';
import { Redirect, Switch, Route} from "react-router-dom";
import FilterColorDetails from './FilterColorDetails';
import ColorIndex from "./ColorIndex";
import NewColorForm from "./NewColorForm";
import Nav from './Nav'

import './App.css';


function App() {
  const [colors,setColors]=useState([{color:"black",hex:'#000000'}, {color:"white",hex:'#FFFFFF'}]);
  const addColor=(color)=>{
    setColors(colors =>[...colors, color])
  }

  return (
    <div className="App">
      <Nav />
      <Switch>        
        <Route exact path="/colors/new" >
          <NewColorForm addColor={addColor}/>
        </Route>        
        <Route exact path="/colors/:name" >
          <FilterColorDetails colors={colors} />
        </Route>
        <Route exact path="/colors" >
          <ColorIndex colors={colors}/>
        </Route>
        <Redirect to="/colors" />
      </Switch>     
    </div>


  );
}
export default App;
