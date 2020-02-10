import React, { Component, useState } from "react";
import "./App.css";
import axios from "axios";
import smurfContext from "../contexts/SmurfContext";


function App () {
  const [smurf, setSmurf] = useState([]);

  const getSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        setSmurf(res.data);
      })
      .catch(err => {
        console.log('Error!')
      })
  }

  const postSmurf = () => {
    axios.post('http://localhost:3333/smurfs')
    .then(res => {
      setSmurf(res.data)
    })
    .catch(err => {
      console.log('Error!')
    })
  }
  return(
    <smurfContext.Provider value={smurf, getSmurf}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context API</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    </smurfContext.Provider>
    
  )
}

export default App;
