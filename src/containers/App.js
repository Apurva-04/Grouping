import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import {setSearchField,requestRobots} from '../actions.js';

import SearchBox from '../components/SearchBox.js';
import CardGen from '../components/CardGen.js';
//import { robots } from './robots';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';

const mapStateToProps=(state)=>{
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
		onRequestRobots: ()=>requestRobots(dispatch)
	}
}

class App extends React.Component{

	componentDidMount(){
		this.props.onRequestRobots();
	}
	render(){
		//const {robots}=this.state;
		const {searchField, onSearchChange, robots, isPending}=this.props;
		const filteredRobots= robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		if(isPending)
			return <h1> Loading </h1>;
		else if(robots.length==0)
			return <h1>error</h1>;
		else
			return(
				<div>
					<h1>ROBOFRIENDS</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardGen robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);