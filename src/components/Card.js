import React from 'react';
import './Card.css';

const Card=({place,lower_date,upper_date,lower_age,upper_age,lower_budget,upper_budget})=>{
	return(
		<div id='robo'>
			<img src={"https://i.imgur.com/Jq8GpyL.png"} alt="robo"/>
			<div>
				<h2>{place}</h2>
				<p>Date : {lower_date} - {upper_date}</p>
				<p>Age group : {lower_budget} - {upper_budget}</p>
				<p>Budget : {lower_budget} - {upper_budget}</p>
			</div>
		</div>
	);
}

export default Card;