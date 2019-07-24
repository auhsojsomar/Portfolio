import React, { Component } from "react";

export class About extends Component {
	componentWillMount() {
		document.title = "Joshua Ramos | About";
	}
	render() {
		return <div>About</div>;
	}
}

export default About;
