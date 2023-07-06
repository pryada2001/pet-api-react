import React from 'react';
import classes from './ActionButton.module.css';

const ActionButton = ({ children, ...props }) => {

	return (
		<button className={ classes['action-button'] } { ...props }>
			{ children }
		</button>
	);
};

export default ActionButton;