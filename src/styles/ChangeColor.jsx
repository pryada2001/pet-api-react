import React from 'react';
import "./ChangeColor.css";

const ChangeColor = () => {
	const setDarkMode = () => {
		document.querySelector("html").setAttribute("data-theme", "dark");
	}

	const setLightMode = () => {
		document.querySelector("html").setAttribute("data-theme", "light");
	}

	const setGreenMode = () => {
		document.querySelector("html").setAttribute("data-theme", "green");
	}

	const toggleTheme = () => {
		if (document.querySelector("html").getAttribute("data-theme") === "green") {
			setDarkMode();
		} else if (document.querySelector("html").getAttribute("data-theme") === "dark") {
			setLightMode();
		} else if (document.querySelector("html").getAttribute("data-theme") === "light") {
			setGreenMode();
		}
	}

	return (
		<div className="change-color">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda commodi corporis doloremque dolorum,
				ea eos error est ipsum iusto laboriosam natus numquam perspiciatis quam, rerum similique suscipit vel, voluptates!
			</p>
			<button className="btn-change-color" onClick={toggleTheme}>Change Color</button>
		</div>
	);
};

export default ChangeColor;