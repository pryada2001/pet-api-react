import React, {Component, useState} from 'react';

class ClassCounter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	}

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	}

	render() {

		return (
			<div>
				<h1>{ this.state.count }</h1>

				<button
					onClick={ this.increment }
					style={{ userSelect: "none" }} >
					Increment
				</button>

				<button
					onClick={ this.decrement }
					style={{ userSelect: "none" }} >
					Decrement
				</button>
			</div>
		);
	}
}

export default ClassCounter;