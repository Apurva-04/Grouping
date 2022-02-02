import React from 'react';
import './SearchBox.css';

const SearchBox=(p)=>{
	//p.s="bye"; //<-----ERROR
	//props is read-only.
	//console.log(p.s);
	return(
		<div id="form">
			<input 
			type="text" 
			name="name" 
			placeholder="Name"
			onChange={p.searchChange}
			/>
		</div>
	);
}

export default SearchBox;