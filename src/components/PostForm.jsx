import React, {useState} from 'react';
import DefaultInput from "./UI/input/DefaultInput";
import ActionButton from "./UI/button/ActionButton";

const PostForm = (props) => {

	const {create} = props;

	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (event) => {
		event.preventDefault();
		const newPost = {
			...post,
			id: Date.now()
		};
		create(newPost);
		setPost({title: '', body: ''});
	};

	return (
		<form className="form-create-post">
			<h1>Создать пост</h1>
			<DefaultInput
				value={post.title}
				onChange={(event) => setPost({...post, title: event.target.value})}
				type="text"
				placeholder="Название поста"
			/>
			<DefaultInput
				value={post.body}
				onChange={(event) => setPost({...post, body: event.target.value})}
				type="text"
				placeholder="Описание поста"
			/>
			<ActionButton onClick={addNewPost}>Отправить</ActionButton>
		</form>
	);
};

export default PostForm;