import React from 'react';
import { NavLink } from 'react-router-dom';

function  NavBar({user,onlogout}) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }) .then (onlogout())
    }

    const logout = <a onClick={handleLogout}>Logout</a>
    const login = <NavLink exact to="/login">Login</NavLink>

    let loginOut = (user ? logout : login)


    return(
        <div className="nav">
            <img id="navbarlogo" src="./sb.png"/>
            <a href="/home">Southern Bloodstock brokerage</a>
            <NavLink exact to="/home">Home</NavLink>
            {user?<NavLink exact to="/Horses">Inventory</NavLink>:null}
            <NavLink exact to="/about">About</NavLink>
            {loginOut}
        </div>
    )
}

export default NavBar;