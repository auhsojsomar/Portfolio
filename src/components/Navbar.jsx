import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/">Home</Link>
					<Link to="/about">Link</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
