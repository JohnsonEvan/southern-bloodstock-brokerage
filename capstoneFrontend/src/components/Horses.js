import React, {useEffect, useState } from "react"
import './App.css';
import Header from './Header';
import HorseCard from "./HorseCard";

const horsesAPI = 'http://localhost:3000';

function Horses() {

    const [horses, setHorses] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
    fetch('http://127.0.0.1:3000/horses')
    .then(response => response.json())
    .then(horseData =>{
      console.log(horseData)
    setHorses(horseData)
    })
    }, [])


    function handleDeleteHorse(deletedHorse){
        fetch(`${horsesAPI}/${deletedHorse.id}`, {
        method: 'DELETE'
        });
        const deleteHorses = horses.filter(item => item.id !== deletedHorse.id)
        setHorses(deleteHorses)
    }

    function handleSearch(searchText){
        setSearchText(searchText);
    }
    const filterHorses = horses.filter((horses)=>{
        const upperSearchText = searchText.toUpperCase();
        return horses.location.toUpperCase().includes(upperSearchText) || horses.name.toUpperCase().includes(upperSearchText) || horses.broker.toUpperCase().includes(upperSearchText);
    })

    return (
        <div className="root">
        <Header handleSearch={handleSearch} />
            <div id="horselist">
            <HorseCard horses={filterHorses} handleDeleteHorse={handleDeleteHorse} />
        </div>
        </div>
    );
}

export default Horses;