import React from "react";
import "./box.css";

function Box (props){
    const { user, grade} = props

    return <div className="box">
        <h2>{user}</h2>
        <h2> | </h2>
        <h2>{grade}</h2>
        </div>;
}

export default Box;