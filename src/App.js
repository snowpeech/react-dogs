import React,{useState} from 'react';
import { Redirect, Switch, Route} from "react-router-dom";
import FilterColorDetails from './FilterColorDetails';
import ColorIndex from "./ColorIndex";
import NewColorForm from "./NewColorForm";

import './App.css';


function App() {
  // why is colors an object????????????????????????
  const [colors,setColors]=useState([{color:"black",hex:'#000000'}, {color:"white",hex:'#FFFFFF'}]);
  console.log("FROM APP:", colors,typeof colors)
  const addColor=(color)=>{
    setColors(colors =>[...colors, color])
  }

  return (
    <div className="App">
      <Switch>        
        <Route exact path="/colors" >
          <ColorIndex colors={colors}/>
        </Route>
        <Route exact path="/colors/new" >
          <NewColorForm addColor={addColor}/>
        </Route>        
        <Route path="/colors/:name" >
          <FilterColorDetails colors={colors} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>     
    </div>


  );
}
export default App;
