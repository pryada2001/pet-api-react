import React from 'react';
import styles from "./StandardModal.module.css";
import ModalButton from "UI/ModalButton/ModalButton";

const StandardModal = (props) => {

    const {isOpen, message, consequences, onConfirm, onCancel} = props;

    return (
        <div className={styles.StandardModal}>
            <div
                className={[styles.overlay, styles[isOpen ? "visible" : "invisible"]].join(' ')}
                onClick={onCancel}>
            </div>
            <div className={[styles.window, styles[isOpen ? "visible" : "invisible"]].join(' ')}>
                <section className={styles.header}>
                    {message}
                </section>
                <section className={styles.main}>
                    <div>
                        {consequences}
                    </div>
                    <div className={styles["flex-container"]}>
                        <ModalButton
                            onClick={onCancel}
                            data-type="cancel">
                        </ModalButton>
                        <ModalButton
                            onClick={onConfirm}
                            data-type="confirm">
                        </ModalButton>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StandardModal;