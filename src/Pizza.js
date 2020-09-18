import React from "react";

export default function Pizza({ pizzaInfo }) {
	const { topping1, topping2, topping3, topping4 } = pizzaInfo;

	return (
		<div>
			<h2>Order under: {pizzaInfo.username}</h2>
			<h2>Pie Size: {pizzaInfo.pizza_size}</h2>
			<h2>Topping1: {topping1 === true ? "Pineapples" : ""}</h2>
			<h2>Topping2: {topping2 === true ? "Jalapenos" : ""}</h2>
			<h2>Topping3: {topping3 === true ? "Pepperoni" : ""}</h2>
			<h2>Topping4: {topping4 === true ? "Sausage" : ""}</h2>
			<h2>Special Instructions: {pizzaInfo.details}</h2>
		</div>
	);
}
