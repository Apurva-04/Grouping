import React from 'react';
import './CardGen.css';
import Card from './Card';

const CardGen=({robots})=>{
	let arr=[];
	for(let i=0;i<robots.length;i++)
		arr.push(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
	return(
		<div id='container'>
			{arr}
		</div>
	);
}

export default CardGen;