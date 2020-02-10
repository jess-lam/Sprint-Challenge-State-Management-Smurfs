import React, { Component, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import smurfContext from "../contexts/SmurfContext";
import SmurfForm from "./SmurfForm";


function App () {
  const [smurf, setSmurf] = useState([]);


  const getSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        //console.log(res);
        setSmurf(res.data);
      })
      .catch(err => {
        console.log('Error!', err)
      })
  }

  useEffect(() => {
    getSmurf();
  }, [])
  //dependency array is for when to run this function getSmurf()

  return(
    <smurfContext.Provider value={smurf}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context API</h1>
        <SmurfForm />
      </div>
    </smurfContext.Provider>
    
  )
}

export default App;
