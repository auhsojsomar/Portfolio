import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";

export default function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}
