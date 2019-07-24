import React, { Component } from "react";

export class Home extends Component {
	componentWillMount() {
		document.title = "Joshua Ramos";
	}
	render() {
		return <div>Home</div>;
	}
}

export default Home;
