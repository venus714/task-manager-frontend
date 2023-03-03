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
            {/* <form>
                <input type placeholder="Enter a to do..." className="task-input"/>
                <button className="button-add" type="submit" > ADD </button>
            </form> */}
            <NavLink className="home" to="/task">
                Tasks
            </NavLink>

        </div>
    )
}
export default Homepage;