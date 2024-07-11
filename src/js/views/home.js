import React, { useContext } from "react";

import "../../styles/home.css";
import { Card } from "../component/Card";
import { Tarjeta } from "../component/Tarjeta";
import { People } from "./people";
import { Context } from "../store/appContext";

export const Home = () => (
 

	<div className="text-center mt-5">

		
		
		<People />
		{/* <h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}

	</div>
);
