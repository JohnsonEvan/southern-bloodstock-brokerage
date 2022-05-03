import React from "react"
import "./Header.css"

function Header({ handleSearch }) {

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        handleSearch(searchText);

    }

    return(
        <header>
            <h1 id="header-patient-tracker">Current Listings</h1>
            <input onChange={handleChange} id="search" type="text" placeholder="Search..."></input>
        </header>
    );
}

export default Header;