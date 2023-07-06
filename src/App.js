import './styles/App.css';
import React, {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'JavaScript — язык программирования'},
		{id: 2, title: 'Basic', body: 'Basic — это база'},
		{id: 3, title: 'Python', body: 'Python — это модно, молодёжно'}
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		document.activeElement.blur();
	};

	const removePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id));
	}

	return (
		<div className="App">
			<PostForm create={createPost}/>
			<PostList remove={removePost} posts={posts} title="Список постов"/>
		</div>
	);
}

export default App;
