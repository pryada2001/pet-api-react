import React from 'react';
import './ModalWindow.css';

const ModalWindow = (props) => {

	const {isOpen, message, consequences, onConfirm, onCancel} = props;

	return (
		<div>
			<div className={"modal-overlay" + (isOpen ? " open" : " hidden")} onClick={onCancel}></div>
			<div className={"modal-window" + (isOpen ? " open" : " hidden")}>
				<section className="header">{message}</section>
				<section className="main">
					<div className="consequences">{consequences}</div>
					<div className="buttons__flex-container">

						<button
							className="button-cancel"
							onClick={onCancel}>
							Отмена
						</button>

						<button
							className="button-confirm"
							onClick={onConfirm}>
							Подтвердить
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ModalWindow;