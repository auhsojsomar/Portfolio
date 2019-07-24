import React, { Component, Fragment } from "react";
import Hero from "../components/Hero";

export class Home extends Component {
	componentWillMount() {
		document.title = "Joshua Ramos";
	}
	render() {
		return (
			<Fragment>
				<Hero />
			</Fragment>
		);
	}
}

export default Home;
