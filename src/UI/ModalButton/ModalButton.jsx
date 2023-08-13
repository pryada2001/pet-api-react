import React from 'react';
import styles from "./ModalButton.module.css";

const ModalButton = ({children, ...props}) => {
    const confirmText = "Подтвердить";
    const cancelText = "Отмена";

    const getChildrenText = () => {
        switch (props["data-type"]) {
            case "confirm": return confirmText;
            case "cancel":  return cancelText;
            default:        return children;
        }
    }

    return (
        <button
            {...props}
            className={styles.ModalButton}>
            {getChildrenText()}
        </button>
    );
};

export default ModalButton;