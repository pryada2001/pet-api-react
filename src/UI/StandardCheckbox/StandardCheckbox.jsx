import React from 'react';
import styles from "./StandardCheckbox.module.css";

const StandardCheckbox = ({
            "data-label": dataLabel,
            "data-checked": dataChecked,
            children,
            ...props
        }) => {
    const importantLabel = "Важный пост (⭐)";

    const getLabel = () => {
        switch (dataLabel) {
            case "important": return importantLabel;
            default:          return children;
        }
    }

    return (
        <div className={styles.StandardCheckbox} {...props}>
            <div className={[styles.flexbox, styles[dataChecked ? "checked" : '']].join(' ')}>
                <div className={styles.checkbox}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles[dataChecked ? "visible" : "invisible"]}
                        style={{marginBottom: "1rem"}} // Position fix TODO: LOOK AT ME
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4.5}
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <div className={styles.label}>{getLabel()}</div>
            </div>
        </div>
    );
};

export default StandardCheckbox;