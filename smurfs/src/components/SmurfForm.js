import React, {useContext, useState} from "react";
import axios from "axios";
//import smurfContext from "../contexts/SmurfContext";

const SmurfForm = (props) => {
    //const {smurf, postSmurf} = useContext(smurfContext);

    const info = {
        name: "",
        age: "",
        height: ""
    }

    const [newSmurf, setNewSmurf] = useState(info);

    const handleChanges = event => {
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
    }

    const handleSubmit = e => {
        e.preventDefaßult();
        
            axios.post('http://localhost:3333/smurfs', {newSmurf})
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log('Error!', err)
            })
          }
    

    return(
        <div className="smurf-form">
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                type="text"
                value={newSmurf.name}
                placeholder="Name"
                onChange={handleChanges}
                />
                <input
                name="age"
                type="text"
                value={newSmurf.age}
                placeholder="Age"
                onChange={handleChanges}
                />
                <input
                name="height"
                type="text"
                value={newSmurf.height}
                placeholder="Height"
                onChange={handleChanges}
                />
                <button type="submit">Add</button>
            </form>
        </div>

    )
}

export default SmurfForm;