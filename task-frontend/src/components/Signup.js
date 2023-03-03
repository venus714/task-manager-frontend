import React from "react";
import { Link } from "react-router-dom";

function SignUp(){
    return (
        <div>
            <form >
            <input type="text" placeholder="Enter Name" /><br />
                <input type="email" placeholder="Enter Email"/><br />
                <input  type="password" placeholder="Enter Password"/><br />
                <input type="password" placeholder="Confirm Password " /><br />
                <Link to="Homepage"><button type="submit">Sign Up</button></Link>
                <span>
                    <h6>If you have an account</h6>
                    <Link to="Login"><h6>LogIn !</h6></Link>

                </span>
            </form>
        </div>

    )
}
export default SignUp