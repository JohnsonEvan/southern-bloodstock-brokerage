import React from "react";
import './Home.css';
import MapContainer from "./MapContainer";


function Home(){
    return (
    <div>
        <div id="hero-image">
            <div class="wrapper">
                <h2><strong>A simplified, refined</strong><br/>
                horse brokerage.</h2>
                <a href="/login" class="button-1" id="home-button-1">Get Started</a>
            </div>
        </div>
        <br/>
        <div>
            <h1 id="abovemap">We're located at</h1>
            <br/>
        <MapContainer />
        </div>
    </div>
    );
}



export default Home;