import React from 'react';
import Solohorsecard from './solohorsecard';


function ReviewCard({horses}) {

    let horseList = horses.map(horse => {
        return (
            <Solohorsecard 
            key={horse.id}
            horse={horse}
            />
        )
    })
    return(
        <div class="card">
            {horseList}
        </div>
    )
}

export default ReviewCard;