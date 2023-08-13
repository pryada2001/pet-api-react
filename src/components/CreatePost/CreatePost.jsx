import React, {useState} from 'react';
import "./CreatePost.css";
import StandardButton from "UI/StandardButton/StandardButton";
import StandardInput from "UI/StandardInput/StandardInput";
import StandardCheckbox from "UI/StandardCheckbox/StandardCheckbox";

const CreatePost = (props) => {

	const {create} = props;

	const [post, setPost] = useState({title: '', body: '', important: false});

	const addNewPost = (event) => {
		event.preventDefault();
		const newPost = {
			...post,
			id: Date.now()
		};
		create(newPost);
		setPost({title: '', body: '', important: false});
	};

	const clearInputs = (event) => {
		event.preventDefault();
		setPost({title: '', body: '', important: false});
	};

	return (
		<section className="create-post-section">
			<div className="wrapper">
				<form className="create-post-form main-section" spellCheck="false">
					<h1 className="section-title">Создание поста</h1>
					<div className="create-post-form__main">
						<StandardInput
							value={post.title}
							onChange={(event) => setPost({...post, title: event.target.value})}
							type="text"
							data-type="header" />
						<StandardInput
							value={post.body}
							onChange={(event) => setPost({...post, body: event.target.value})}
							rows="4"
							data-type="body" />
						<div className="flex-container">
							<StandardCheckbox
								data-label={"important"}
								data-checked={post.important}
								onClick={() => setPost({...post, important: !post.important})} />
							<div className="create-post-form__buttons--flex-container">
								<StandardButton
									onClick={addNewPost}
									data-type="submit">
								</StandardButton>
								<StandardButton
									onClick={clearInputs}
									data-type="cancel">
								</StandardButton>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CreatePost;