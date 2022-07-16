import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";

function App(props) {
	const [state, setState] = useState({
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	});

	// const state = {
	// 	counters: [
	// 		{ id: 1, value: 4 },
	// 		{ id: 2, value: 0 },
	// 		{ id: 3, value: 0 },
	// 		{ id: 4, value: 0 }
	// 	]
	// };

	const constructor = (props) => {
		console.log("App - Constructor", props);
	};

	constructor(props);

	const componentDidMount = () => {
		console.log("App - Mounted");
	};

	const handleIncrement = (counter) => {
		const counters = [...state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		setState({ counters });
	};

	const handleReset = () => {
		state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		setState({ counters: state.counters });
	};

	const handleDelete = (counterId) => {
		const counters = state.counters.filter((c) => c.id !== counterId);
		setState({ counters });
	};

	console.log("App - Rendered");

	return (
		<React.Fragment>
			<NavBar
				totalCounters={state.counters.filter((c) => c.value > 0).length}
			/>
			<main className="container">
				<Counters
					counters={state.counters}
					onReset={handleReset}
					onIncrement={handleIncrement}
					onDelete={handleDelete}
				/>
			</main>
		</React.Fragment>
	);
}

export default App;
