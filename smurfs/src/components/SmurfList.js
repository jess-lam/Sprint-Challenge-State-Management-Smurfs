import React, {useContext} from "react";
import {smurfContext} from "../contexts/SmurfContext";
import SmurfCard from "./SmurfCard";

export default function SmurfList() {
    const {smurf} = useContext(smurfContext);
    console.log(smurf);
    return(
        <div>
            <section className="smurf-list">
                {smurf.map(item => (
                    <SmurfCard
                    key={item.id}
                    name={item.id}
                    age={item.age}
                    height={item.height}
                    />
                ))}
            </section>
        </div>
    )
}
