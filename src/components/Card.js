import React from 'react';
import './Card.css';

const Card=({name,email,id})=>{
	return(
		<div id='robo'>
			<img src={`https:robohash.org/${id}`} alt="robo"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;