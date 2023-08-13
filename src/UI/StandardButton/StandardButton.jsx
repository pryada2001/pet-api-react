import React from 'react';
import styles from "./StandardButton.module.css";

const StandardButton = ({children, ...props}) => {
    const submitText = "Отправить";
    const cancelText = "Отмена";

    const getChildrenText = () => {
        switch (props["data-type"]) {
            case "submit": return submitText;
            case "cancel": return cancelText;
            default:       return children;
        }
    }

    return (
        <button
            {...props}
            className={styles.StandardButton}>
            {getChildrenText()}
        </button>
    );
};

export default StandardButton;