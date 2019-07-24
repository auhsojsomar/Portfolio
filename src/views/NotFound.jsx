import React, { Component } from "react";

export class NotFound extends Component {
	componentWillMount() {
		document.title = "404 Not Found";
	}
	render() {
		return <div>NotFound</div>;
	}
}

export default NotFound;
