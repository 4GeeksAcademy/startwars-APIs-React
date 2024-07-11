import React, { useContext, useEffect, useState } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";



export const People = () => {
    const{store,actions} = useContext(Context)
    const [people, setPeople] = useState([])

     const obtainPeople = async() =>{
    
    try {
        const response = await fetch('https://www.swapi.tech/api/people',{

        })
        const data = await response.json()
        setPeople(data.results)
        console.log(data, "data people");
    } catch (error) {
        console.log(error, "error1");
    }
    }
useEffect(() => {
    obtainPeople()
 }, [])

    return(
        <div>
            {people.map(people => {
                const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`
                console.log(imgUrl)
                return( 
            <div>

                <p>{people.name}</p>
                <img src={imgUrl}></img> 
                <p>{people.url}</p>
                 {/* <  Card 
                
                />  */}
            </div>
 
            )})} 
            {/* <Card nombre={''} photo={''} eyes_color={''} heigth={''} />
            <Card nombre={''} photo={''} eyes_color={''} heigth={''} /> */}
        </div>
    )
}