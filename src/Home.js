import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<div>
				<img src="" alt="Pizza" />
			</div>
			<Link to="/pizza">
				<h2>Order Pizza</h2>
			</Link>
		</div>
	);
}

export default Home;
