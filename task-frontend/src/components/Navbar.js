import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
        <Link className='text-light nav-link' to="signup" id="loginnnn" >{"Signup"}</Link>
        <Link className='text-light nav-link' to="login" id="loginnnn" >{"Login"}</Link>
    </nav>
    </div>
  )
}
export default Navbar
