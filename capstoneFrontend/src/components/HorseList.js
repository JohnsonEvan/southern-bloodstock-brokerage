import React from "react"
import Horses from './horse'

function HorseList({ horses}) {

  const horseList = horses.map(horse => {
    return <Horses key={horse.name} horse={horse} />
  })

    return(
      <table>
          <tbody>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Price</th>
                <th>Broker</th>
                <th>Image</th>
                <th>Favorite</th>
            </tr>
            {horseList}
          </tbody>
      </table>  
    );
}

export default HorseList;