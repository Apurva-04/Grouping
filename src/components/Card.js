import React from 'react';
import './Card.css';

const Card=({place,email,id})=>{
	return(
		<div id='robo'>
			<img src={"https://i.imgur.com/Jq8GpyL.png"} alt="robo"/>
			<div>
				<h2>{place}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;