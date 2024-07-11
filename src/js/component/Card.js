import React, { useContext, useEffect, useState } from "react";
import {Context} from "../store/appContext";


export const Card = (uid) => {
    
    const getInfo = async(name,url) => {

       try {
        const response = await fetch(`https://www.swapi.tech/api/people/${people.uid}`,{

        })
        const data = await response.json()
        console.log(data, "informacion data")
       } catch (error) {
        console.log(error, "error url");
        
       }
      }
    useEffect (() =>{
        getInfo()
    }, [])

    const{store,actions} = useContext(Context);


    

    return (
        <div className="container d-flex">
           
            <div className="card" >
                <img src='' />
                    <div className="card-body">
                        
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
           
        </div>


    )
};