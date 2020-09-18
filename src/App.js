import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./PizzaForm";

const App = () => {
	return (
		<>
			<nav>
				<h1>Lambda Eats</h1>
				<div>
					<Link to="/">Home</Link>
					<Link to="/pizza">Order Pizza</Link>
				</div>
			</nav>
			<div className="comp-container">
				<Switch>
					<Route path="/pizza">
						<PizzaForm />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</>
	);
};
export default App;
