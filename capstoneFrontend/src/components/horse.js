import React from "react";

function horse({ horse}) {



    return(
        <tr className="">
            <td>{horse.name}</td>
            <td>{horse.location}</td>
            <td>{horse.price}</td>
            <td>{horse.broker}</td>
            <td>{horse.image}</td>
            <td><button>Add to Favorite</button></td>
        </tr>
    )
}

export default horse;