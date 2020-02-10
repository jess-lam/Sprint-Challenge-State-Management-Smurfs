import React, {useContext, useState} from "react";
//import smurfContext from "../contexts/SmurfContext";

const SmurfForm = (props) => {
    //const {smurf, postSmurf} = useContext(smurfContext);
    const info = {
        name: "",
        age: "",
        height: ""
    }

    const {newSmurf, setNewSmurf} = useState(info);

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDeafult();
        props.postSmurf(newSmurf, props.smurf)
    }

    return(
        <div className="smurf-form">
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                type="text"
                value={props.name}
                placeholder="Name"
                onChange={handleChanges}
                />
                <input
                name="age"
                type="text"
                value={props.age}
                placeholder="Age"
                onChange={handleChanges}
                />
                <input
                name="height"
                type="text"
                value={props.height}
                placeholder="Height"
                onChange={handleChanges}
                />
                <button type="submit">Add</button>
            </form>
        </div>

    )
}

export default SmurfForm;