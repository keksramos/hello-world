import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Pokemon from "../../components/Pokemon/Pokemon";


export default function Test(){

    const {param} = useParams()
    return(
        <div className="test">
            <h1>Test</h1>
            <p>Param: {param}</p>
        </div>
    )
}