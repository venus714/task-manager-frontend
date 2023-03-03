import React from "react";
import { NavLink } from "react-router-dom";

function Homepage (){
    return(
        <div>
            <h1>
            TASK MANAGER
            </h1>
            <NavLink className="home" to="/Login">
            Log in
            </NavLink>
            <NavLink className="home" to="/Signup">
                SIGN UP
            </NavLink>

        </div>
    )
}
export default Homepage;