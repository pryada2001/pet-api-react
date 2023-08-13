import React from 'react';
import styles from "./StandardInput.module.css";

const StandardInput = ({placeholder, ...props}) => {
    const headerPlaceholder = "Название поста";
    const bodyPlaceholder = "Описание поста";

    const getPlaceholder = () => {
        switch (props["data-type"]) {
            case "header": return headerPlaceholder;
            case "body":   return bodyPlaceholder;
            default:       return placeholder;
        }
    }

    const tagName = props["data-type"] === "header" ? "input" : "textarea";

    return React.createElement(tagName, {
        ...props,
        className: styles.StandardInput,
        placeholder: getPlaceholder()
    });
};

export default StandardInput;