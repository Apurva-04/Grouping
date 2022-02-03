import React from 'react';
import './CardGen.css';
import Card from './Card';

const CardGen=({robots})=>{
	let arr=[];
	for(let i=0;i<robots.length;i++)
		arr.push(<Card key={i}  place={robots[i].place} lower_date={robots[i].lower_date} upper_date={robots[i].upper_date} lower_budget={robots[i].lower_budget}  upper_budget={robots[i].upper_budget} lower_age={robots[i].lower_age} upper_age={robots[i].upper_age}/>);
	return(
		<div id='container'>
			{arr}
		</div>
	);
}

export default CardGen;