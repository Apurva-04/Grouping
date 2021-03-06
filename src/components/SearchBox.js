import React from 'react';
import './SearchBox.css';
import './SearchBox.scss';
import img from './travel.png';

const SearchBox=(p)=>{
	//p.s="bye"; //<-----ERROR
	//props is read-only.
	//console.log(p.s);
	const handleClick=()=>{
		if(p.searchField==="")
		{
			alert("Please enter a place");
			return;
		}
		let obj = {
			place: p.searchField,
			upper_budget:p.f.upper_budget,
			lower_budget:p.f.lower_budget,
			upper_age:p.f.age,
			lower_age:p.f.age,
			lower_date:p.f.lower_date,
			upper_date:p.f.upper_date
		}
		console.log(obj);
		fetch('https://in-groups.herokuapp.com/groups/createGroup',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
            	place: p.searchField,
				upper_budget:p.f.upper_budget,
				lower_budget:p.f.lower_budget,
				upper_age:p.f.age,
				lower_age:p.f.age,
				lower_date:p.f.lower_date,
				upper_date:p.f.upper_date
            })
        })
        .then(res=>res.json())
        .then(data=>{
        	//console.log(data);
            p.requestRobots();
        })
        .catch(err=>alert(err));
	}
	return(
		<div id="form">
			<img className="im right" src={img} alt="im"/>
			<h2> Your details </h2>
			<label>Age :</label>
			<input type="number" name="age" onChange={p.onSearchChange1}/>
			<br/>
			<label>Start Date :</label>
			<input type="date" name="lower_date" onChange={p.onSearchChange1}/>
			<label>End Date :</label>
			<input type="date" name="upper_date" onChange={p.onSearchChange1}/>
			<br/>
			<br/>
			
		  	<br/>
			<label>Budget :</label>
			<br/>
			<form onChange={p.onSearchChange1}>
				<div id="debt-amount-slider">
					<input type="radio" name="debt-amount" id="1" value="1" required/>
					<label for="1" data-debt-amount="< ₹10k"></label>
					<input type="radio" name="debt-amount" id="2" value="2" required/>
					<label for="2" data-debt-amount="₹10k-25k"></label>
					<input type="radio" name="debt-amount" id="3" value="3" required/>
					<label for="3" data-debt-amount="₹25k-50k"></label>
					<input type="radio" name="debt-amount" id="4" value="4" required/>
					<label for="4" data-debt-amount="₹50k-100k"></label>
					<input type="radio" name="debt-amount" id="5" value="5" required/>
					<label for="5" data-debt-amount="₹100k+"></label>
					<div id="debt-amount-pos"></div>
				</div>
			</form>	
			<br/>
			<br/>
			<hr/>
			<label>Search Place :</label>
			<input 
			type="text" 
			name="name" 
			placeholder="Place"
			onChange={p.searchChange}
			/>
			<div id="newBtn" onClick={handleClick}>Create New Group</div>
			<br/>
			<hr/>
		</div>
	);
}

export default SearchBox;
/*
<label>Interests :</label>
			<br/>
			<form id="checkbox">
		    	<input type="checkbox" id="food"/>
		    	<label for="html">Food</label>
		    	<input type="checkbox" id="adventure"/>
		    	<label for="css">Adventure</label>
		    	<input type="checkbox" id="Bikes"/>
		    	<label for="javascript">Bikes</label>
		  	</form>
		  	*/