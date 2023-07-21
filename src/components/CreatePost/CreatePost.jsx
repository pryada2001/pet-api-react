import React, {useState} from 'react';
import "./CreatePost.css";

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

						<input
							value={post.title}
							onChange={(event) => setPost({...post, title: event.target.value})}
							className="create-post-form__input"
							type="text"
							placeholder="Название поста" />

						<textarea
							value={post.body}
							onChange={(event) => setPost({...post, body: event.target.value})}
							className="create-post-form__textarea"
							rows="4"
							placeholder="Описание поста"></textarea>

						<div className="checkbox-important__block">
							<div
								className={"checkbox-important__flexbox"  + (post.important ? " checkbox--checked" : "")}
								onClick={() => setPost({...post, important: !post.important})}>
								<div className="checkbox-important__checkbox">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className={(post.important ? "" : "invisible")}
										style={{marginBottom: "1rem"}} // Position fix
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={4.5}
										stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
									</svg>
								</div>
								<div className="checkbox-important__label">Важный пост (⭐)</div>
							</div>
						</div>

						<div className="create-post-form__buttons--flex-container">

							<button
								onClick={addNewPost}
								className="create-post-form__button-submit"
								type="submit">
								Отправить
							</button>

							<button
								onClick={clearInputs}
								className="create-post-form__button-cancel">
								Отмена
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CreatePost;