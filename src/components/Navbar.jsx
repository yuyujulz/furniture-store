import * as React from "react";
import { NavLink } from "react-router-dom"
import user from "../images/noun-user-2727599.png"
import cart from "../images/noun-shopping-bag-5679827.png"


function Navbar() {
    return(
       <div className="navbar">
            <NavLink to="/" className="logo"> JOUNA</NavLink>
            <div className="navbar-wrds">
            <NavLink to="/" className="navbar-words">Home</NavLink>
            <NavLink to="/collection" className="navbar-words">Collection</NavLink>
            <NavLink to="/aboutUs" className="navbar-words">About Us</NavLink>
            </div>
            <div className="navbar-imgs">
            <NavLink to="/signuplogin" className="user"> <img src={user} alt="user" className="user"/></NavLink>
            <NavLink  to="/cart" className="basket"> <img src={cart} alt="basket" className="basket-img"/></NavLink>
            </div>
       </div>
    )
}
export default Navbar