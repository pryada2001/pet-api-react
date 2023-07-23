import './styles/App.css';
import React, {useState} from "react";
import PostList from "./components/PostList/PostList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {

	const [theme, setTheme] = useState("dark");
	document.querySelector("html").setAttribute("data-theme", theme);
	// TODO: Здесь нужно один раз сделать setTheme("dark") и присвоить data-theme="dark" к <html>
	// TODO: нужно научиться узнавать системную тему и использовать её

	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'JavaScript — язык программирования', important: true},
		{id: 2, title: 'Basic', body: 'Basic — это база', important: false},
		{id: 3, title: 'Python', body: 'Python — это модно, молодёжно', important: false}
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id));
	}

	return (
		<div className="App">
			{/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ СКРИПТ СБРАСЫВАЮЩИЙ data-theme="dark" у тега <html> И ПРИСВАИВАЮЩИЙ
					TODO: data-theme: ["light" / "dark"] В ЗАВИСИМОСТИ ОТ СИСТЕМНОЙ ТЕМЫ! */}
			<Header theme={theme} setTheme={setTheme}/>
			<main className="Main">
				<CreatePost create={createPost}/>
				<PostList
					remove={removePost}
					posts={posts}
					title="Список постов"/>
			</main>
			<Footer/>
		</div>
	);
}

export default App;
