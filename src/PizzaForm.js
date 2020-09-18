import React, { useEffect, useState } from "react";
import Axios from "axios";
import Pizza from "./Pizza";
import * as yup from "yup";
import schema from "./PizzaSchema";

const initialValues = {
	username: "",
	pizza_size: "",

	topping1: false,
	topping2: false,
	topping3: false,
	topping4: false,

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
		Axios.post("https://reqres.in/api/users", pizzaOrder)
			.then((res) => {
				console.log(res.data);
				setPizzas([...pizzas, res.data]);
				setPizzaValues(initialValues);
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
			topping1: pizzaValues.topping1,
			topping2: pizzaValues.topping2,
			topping3: pizzaValues.topping3,
			topping4: pizzaValues.topping4,
			details: pizzaValues.details.trim(),
		};
		postPizzaOrder(newPizza);
	};

	const formValidate = (name, value) => {
		yup
			.reach(schema, name)
			.validate(value)
			.then((valid) => {
				setPizzaErrors({
					...pizzaErrors,
					[name]: "",
				});
			})
			.catch((err) => {
				setPizzaErrors({
					...pizzaErrors,
					[name]: err.errors[0],
				});
			});
	};

	const formChange = (e) => {
		const { name, value, type, selected, checked } = e.target;
		const useValue =
			type === "selected" ? selected : type === "checkbox" ? checked : value;
		formValidate(name, useValue);
		setPizzaValues({
			...pizzaValues,
			[name]: useValue,
		});
	};

	useEffect(() => {
		schema.isValid(pizzaValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [pizzaValues]);

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
						<option value="Large">Large</option>
						<option value="Medium">Medium</option>
						<option value="Small">Small</option>
					</select>
				</label>
				<label>
					Pineapples:{" "}
					<input
						value={pizzaValues.topping1}
						onChange={formChange}
						name="topping1"
						type="checkbox"
					/>
				</label>
				<label>
					Jalapenos:{" "}
					<input
						value={pizzaValues.topping2}
						onChange={formChange}
						name="topping2"
						type="checkbox"
					/>
				</label>
				<label>
					Pepperoni:{" "}
					<input
						value={pizzaValues.topping3}
						onChange={formChange}
						name="topping3"
						type="checkbox"
					/>
				</label>
				<label>
					Sausage:{" "}
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
						maxLength="100"
						placeholder="Maximum of 100 characters"
					/>
				</label>
				<button disabled={disabled} id="submitBtn">
					Order
				</button>
			</form>
		</div>
	);
}

export default PizzaForm;
