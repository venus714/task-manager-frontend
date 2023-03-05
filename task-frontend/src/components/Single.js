import React from "react";
import {useParams, NavLink} from 'react-router-dom'


function Single({currentTask}) {
    let currID = useParams().id
    console.log(currID)
    return (
    <div>
        <h2>{currentTask.name}</h2>
        <p>{currentTask.status}</p>
        <p>{currentTask.description}</p>
        <p>{currentTask.due}</p>
        <NavLink to={"/tasks"}>BACK</NavLink>    
        
        </div>
        
        )


}

export default Single