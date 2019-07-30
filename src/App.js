import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./views/NotFound";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));

export default function App() {
	return (
		<Router>
			<Suspense fallback={"Loading..."}>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route component={NotFound} />
				</Switch>
			</Suspense>
		</Router>
	);
}
