import React from "react";
import { Router, Switch, Link } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";

const App = () => {
	return (
		<>
			<nav>
				<h1>Lambda Eats</h1>
				<div>
					<Link to="/"></Link>
					<Link to="/pizza"></Link>
				</div>
			</nav>
			<div className="comp-container">
				<Switch>
					<Router path="/pizza">
						<PizzaForm />
					</Router>
					<Router path="/">
						<Home />
					</Router>
				</Switch>
			</div>
		</>
	);
};
export default App;
