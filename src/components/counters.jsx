import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		const { onReset, counters, onDelete, onIncrement } = this.props;

		console.log("Counters - Rendered");

		return (
			<div>
				<button
					onClick={onReset}
					className="btn bg-primary btn-small m-2"
				>
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;
