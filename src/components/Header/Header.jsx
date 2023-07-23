import React from 'react';
import "./Header.css";

const Header = ({theme, setTheme}) => {

	return (
		<header className="Header">
			<nav className="Header__nav">
				Когда-нибудь, возможно, здесь будет навигация
			</nav>
			<div className="Header__theme-selection">

				<button
					className={"theme-selector theme-selector-dark" + (theme === "dark" ? " theme-selector-active" : "")}
					title="Dark Theme"
					onClick={() => setTheme("dark")}>
				</button>

				<button
					className={"theme-selector theme-selector-light" + (theme === "light" ? " theme-selector-active" : "")}
					title="Light Theme"
					onClick={() => setTheme("light")}>
				</button>

				<button
					className={"theme-selector theme-selector-green" + (theme === "green" ? " theme-selector-active" : "")}
					title="Green Theme"
					onClick={() => setTheme("green")}>
				</button>
			</div>
		</header>
	);
};

export default Header;