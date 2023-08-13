import './styles/App.css';
import React, {useEffect, useState} from "react";
import PostList from "components/PostList/PostList";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import CreatePost from "components/CreatePost/CreatePost";

function App() {
//------------------------------------------- Блок функций касающихся theme --------------------------------------------

	// Функция возвращает системную тему пользователя
	const getSystemTheme = () => {
		return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	};

	// Функция возвращает тему сохранённую в localStorage, если её нет берёт системную
	const getSavedTheme = () => {
		return localStorage.getItem("theme") || getSystemTheme();
	};

	// Состояние для хранения theme
	const [theme, setTheme] = useState(getSavedTheme());

	// Устанавливаем тему при первой загрузке
	useEffect(() => {
		setTheme(getSavedTheme());
	}, []);

	// Модификация setTheme сохраняющая выбор в localStorage
	const setLocalTheme = (newTheme) => {
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	}

	// Для применения стилей для темы устанавливается атрибут data-theme = theme для тега html
	document.querySelector("html").setAttribute("data-theme", theme);

//----------------------------------------------------------------------------------------------------------------------
//------------------------------------------- Блок функций касающихся posts --------------------------------------------

	const postsInit = [
		{id: 1, title: 'JavaScript', body: 'JavaScript — язык программирования', important: true},
		{id: 2, title: 'Basic', body: 'Basic — это база', important: false},
		{id: 3, title: 'Python', body: 'Python — это модно, молодёжно', important: false}
	];

	// Получение сохраненного списка постов из localStorage или postsInit, если ничего не сохранено
	const getSavedPosts = () => {
		return JSON.parse(localStorage.getItem("posts")) || postsInit;
	}

	// Состояние для хранения списка постов
	const [posts, setPosts] = useState(getSavedPosts());

	// Функция для добавления нового поста
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	// Функция для удаления поста по его id
	const removePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id));
	}

	// Эффект для сохранения списка постов в localStorage при его изменении
	useEffect(() => {
		localStorage.setItem("posts", JSON.stringify(posts));
	}, [posts]);

	const changeImportant = (postId) => {
		setPosts((prevPosts) =>
			prevPosts.map((post) =>
				post.id === postId ? {...post, important: !post.important} : post
			)
		);
	}

//----------------------------------------------------------------------------------------------------------------------

	return (
		<div className="App">
			<Header theme={theme} setTheme={setLocalTheme} setPosts={setPosts}/>
			<main className="Main">
				<CreatePost create={createPost}/>
				<PostList
					remove={removePost}
					posts={posts}
					title="Список постов"
					changeImportant={changeImportant}/>
			</main>
			<Footer/>
		</div>
	);
}

export default App;
