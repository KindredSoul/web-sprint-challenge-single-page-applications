import React, { useState } from "react";
import Axios from "axios";
import Pizza from "./Pizza";

const initialValues = {
	username: "",
	pizza_size: "",
	toppings: [
		{ topping1: false },
		{ topping2: false },
		{ topping3: false },
		{ topping4: false },
	],
	details: "",
};
const initialErrors = {
	username: "",
	pizza_size: "",
};
const initialDisabled = true;
const initialPizzas = [];

function PizzaForm() {
	const [pizzas, setPizzas] = useState(initialPizzas);
	const [pizzaValues, setPizzaValues] = useState(initialValues);
	const [pizzaErrors, setPizzaErrors] = useState(initialErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const postPizzaOrder = (pizzaOrder) => {
		Axios.post("", pizzaOrder)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		const newPizza = {
			username: pizzaValues.username.trim(),
			pizza_size: pizzaValues.pizza_size,
			toppings: pizzaValues.toppings,
			details: pizzaValues.details.trim(),
		};
		postPizzaOrder(newPizza);
	};

	return (
		<div>
			<h1>What're Ya Havin?</h1>
			<div>
				{pizzas.map((pizza) => (
					<Pizza pizzaInfo={pizza} />
				))}
			</div>
			<div>
				<div>{pizzaErrors.username} </div>
				<div>{pizzaErrors.pizza_size} </div>
			</div>
			<form onSubmit={formSubmit}>
				<label>
					Name:{" "}
					<input
						value={pizzaValues.username}
						onChange={formChange}
						name="username"
						type="text"
					/>
				</label>
				<label>
					Pizza Size:{" "}
					<select
						value={pizzaValues.pizza_size}
						onChange={formChange}
						name="pizza_size">
						<option value="">- Select Your Size -</option>
						<option value="">Large</option>
						<option value="">Medium</option>
						<option value="">Small</option>
					</select>
				</label>
				<label>
					First Topping:{" "}
					<input
						value={pizzaValues.topping1}
						onChange={formChange}
						name="topping1"
						type="checkbox"
					/>
				</label>
				<label>
					Second Topping:{" "}
					<input
						value={pizzaValues.topping2}
						onChange={formChange}
						name="topping2"
						type="checkbox"
					/>
				</label>
				<label>
					Third Topping:{" "}
					<input
						value={pizzaValues.topping3}
						onChange={formChange}
						name="topping3"
						type="checkbox"
					/>
				</label>
				<label>
					Fourth Topping:{" "}
					<input
						value={pizzaValues.topping4}
						onChange={formChange}
						name="topping4"
						type="checkbox"
					/>
				</label>
				<label>
					Special Instructions:{" "}
					<input
						value={pizzaValues.details}
						onChange={formChange}
						name="details"
						type="textbox"
					/>
				</label>
			</form>
		</div>
	);
}

export default PizzaForm;
