import React from 'react'
import {useHistory} from "react-router-dom"

function Solohorsecard({horse}) {
const history = useHistory()

    return (
        <div id="horsecardeach">
            <img id="horsepic" src={horse.image}/>
        <div class="container">
        <table id="cardtable">
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Broker</th>
        </tr>
        <tr>
            <th class="cardelements">{horse.name}</th>
            <th class="cardelements">{horse.price}</th>
            <th class="cardelements">{horse.location}</th>
            <th class="cardelements">{horse.broker}</th>
            <th class="cardelements"><button id ="message-button" onClick={()=>{history.push("/message_seller")
            }}><strong>Message seller</strong></button></th>
        </tr>
        </table>
            </div>
        </div>
    )
}

export default Solohorsecard