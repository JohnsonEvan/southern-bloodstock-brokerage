import React from 'react';
import { NavLink } from 'react-router-dom';

function  NavBar({user}) {
    return(
        <div className="nav">
            <a href="/home">Southern Bloodstock brokerage</a>
            <NavLink exact to="/home">Home</NavLink>
            {user?<NavLink exact to="/Horses">Inventory</NavLink>:null}
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/contact">Contact</NavLink>
            <NavLink exact to="/login">Login</NavLink>
            <NavLink exact to="/SignUp">SignUp</NavLink>
        </div>
    )
}

export default NavBar;