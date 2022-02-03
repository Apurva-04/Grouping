import React from 'react';
import './App.css';
import logo from './logo.png';
import {connect} from 'react-redux';
import {setSearchField,requestRobots} from '../actions.js';

import SearchBox from '../components/SearchBox.js';
import CardGen from '../components/CardGen.js';
//import { robots } from './robots';
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
	constructor(props){
		super(props);
		this.state={
			lower_date: '',
			upper_date: '',
			age: '',
			budget: ''
		}
	}
	onSearchChange1=(e)=>{
		console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	componentDidMount(){
		this.props.onRequestRobots();
	}
	render(){
		//const {robots}=this.state;
		const {searchField, onSearchChange, robots, isPending}=this.props;
		const filteredRobots= robots.filter((robot)=>{
			let r=robot.place.toLowerCase().includes(searchField.toLowerCase());
			return r;
		});
		if(isPending)
			return <h1> Loading ... </h1>;
		else if(robots.length===0)
			return (
				<div>
					<h1>Find your group</h1>
					<SearchBox searchChange={onSearchChange}/>
					<h2 style={{textAlign: "center"}}>No groups yet</h2>
				</div>
			)
		else
			return(
				<div>
					<img src={logo} id="logo" alt="logo"/>
					<h1>Find your group</h1>
					<SearchBox searchChange={onSearchChange} onSearchChange1={this.onSearchChange1} requestRobots={this.props.onRequestRobots} searchField={this.props.searchField}/>
					<ErrorBoundary>
						<CardGen robots={filteredRobots}/>
					</ErrorBoundary>
				</div>
			);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);