import React from "react";
import { Link } from "react-router-dom";

function Login (){
    return(
        <div>
            <form>
                <input type="text" placeholder="Enter Name" /><br />
                <input type="email" placeholder="Enter Email"/><br />
                <input  type="password" placeholder="Enter Password"/><br />
                <Link to="/Homepage"><button type="submit">Log In</button></Link>
                
                <span>
                    <h6>If you don't have an account</h6>
                    <Link to="signup"><h6>Register Now!</h6></Link>


                </span>
            </form>
        </div>
    )
}
export default Login