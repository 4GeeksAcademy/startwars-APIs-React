import React, { useContext, useState } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";



export const People = (name,photo,eyes_color,heigth) => {
    const{store,actions} = useContext(Context)
    const [people, setPeople] = useState([])

    const obtainPerson = () =>{
        actions.getPerson()
    }


    return(
        <div>
            {people.map(people => ( 

            <  Card key={results} />
 
            ))} 
            {/* <Card nombre={''} photo={''} eyes_color={''} heigth={''} />
            <Card nombre={''} photo={''} eyes_color={''} heigth={''} /> */}
        </div>
    )
}