import React from 'react';
import "./Header.css";

const Header = () => {
	return (
		<header className="Header">
			<nav className="Header__nav">
				Когда-нибудь, возможно, здесь будет навигация
			</nav>
			<div className="Header__theme-selection">
				<button className="theme-selector theme-selector-dark theme-selector-active" title="Dark Theme"></button>
				<button className="theme-selector theme-selector-white" title="White Theme"></button>
				<button className="theme-selector theme-selector-green" title="Green Theme"></button>
			</div>
		</header>
	);
};

export default Header;