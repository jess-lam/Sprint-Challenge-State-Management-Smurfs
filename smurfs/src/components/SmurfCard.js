import React from "react";

export default function SmurfCard(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}