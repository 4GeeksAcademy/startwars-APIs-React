import React, { useContext, useState } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";



export const People = (name,photo,eyes_color,heigth) => {
    const{store,actions} = useContext(Context)
    const[personas,setPersona] = useState('')


    return(
        <div>
            {/* {personas?.map(persona => ( */}

            <Card name= {name} photo={photo} eyes_color={eyes_color} heigth={heigth} />

            {/* ))} */}
            {/* <Card nombre={''} photo={''} eyes_color={''} heigth={''} />
            <Card nombre={''} photo={''} eyes_color={''} heigth={''} /> */}
        </div>
    )
}