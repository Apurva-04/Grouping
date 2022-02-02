import React, {Component} from 'react';

class ErrorBoundary extends Component{
	constructor(){
		super();
		this.state={
			hasError: false
		}
	}
	componentDidCatch(error,info){
		this.setState({hasError: true});
	}
	render(){
		//console.log(this.props)
		if(this.state.hasError)
			return <h1>Oops. this isnt good</h1>
		return this.props.children
	}
}

export default ErrorBoundary;