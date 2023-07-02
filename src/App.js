import './styles/App.css';
import React, {useState} from "react";
import PostList from "./components/PostList";
import ActionButton from "./components/UI/button/ActionButton";
import DefaultInput from "./components/UI/input/DefaultInput";

function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'JavaScript — язык программирования'},
		{id: 2, title: 'Basic', body: 'Basic — это база'},
		{id: 3, title: 'Python', body: 'Python — это модно, молодёжно'}
	]);

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addNewPost = (event) => {
		event.preventDefault();
		const newPost = {
			id: Date.now(),
			title,
			body
		};
		setPosts([...posts, newPost]);
		setTitle('');
		setBody('');
	};

	return (
		<div className="App">
			<form>
				<DefaultInput
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					type="text"
					placeholder="Название поста"
				/>
				<DefaultInput
					value={body}
					onChange={(event) => setBody(event.target.value)}
					type="text"
					placeholder="Описание поста"
				/>
				<ActionButton onClick={addNewPost}>Отправить</ActionButton>
			</form>
			<PostList posts={posts} title="Список постов"/>
		</div>
	);
}

export default App;
