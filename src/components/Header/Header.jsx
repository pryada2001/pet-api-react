import React, {useState} from 'react';
import "./Header.css";
import StandardModal from "UI/StandardModal/StandardModal";

const Header = ({theme, setTheme, setPosts}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [action, setAction] = useState("");
    const [modalMessage, setModalMessage] = useState("Если вы видите это сообщение");
    const [consequencesMessage, setConsequencesMessage] = useState("Пожалуйста сообщите об этом" +
        " по email: pryada16@gmail.com со способом которым вы его получили");

    const handleOpenModal = (action) => {
        setIsModalOpen(true); // Открываем модальное окно при нажатии на кнопку
        if (action === "delete-posts") {
            setModalMessage("Удалить все посты?");
            setConsequencesMessage("Это безвозвратно удалит все посты.");
            setAction("delete-posts");
        } else if (action === "clear-localStorage") {
            setModalMessage("Отменить изменения?");
            setConsequencesMessage("Это вернёт тему и список постов в исходное состояние.");
            setAction("clear-localStorage");
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Закрываем модальное окно
    };

    const handleConfirmAction = () => {
        if (action === "delete-posts") {
            setPosts([]);
        } else if (action === "clear-localStorage") {
            console.log(localStorage);
            localStorage.clear();
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        }
        handleCloseModal(); // Закрываем модальное окно после подтверждения
    };

    return (
        <header className="Header">
            <div className="Header__container">
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

                    <div className="service-block">

                        <button
                            className="delete-posts"
                            title="Delete all posts"
                            onClick={() => handleOpenModal("delete-posts")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>

                        <button
                            className="clear-localStorage"
                            title="Undo changes"
                            onClick={() => handleOpenModal("clear-localStorage")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                />
                            </svg>
                        </button>
                    </div>


                </div>
            <StandardModal
                isOpen={isModalOpen}
                message={modalMessage}
                consequences={consequencesMessage}
                onConfirm={handleConfirmAction}
                onCancel={handleCloseModal}
            />
        </header>
    );
};

export default Header;