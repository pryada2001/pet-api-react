import React from 'react';
import ActionButton from "./UI/button/ActionButton";

const PostItem = (props) => {

	const { title, body } = props.post;
	const { number } = props;

	return (
		<div className="post">
			<div className="post__content">
				<strong>{ number }. { title }</strong>
				<div>
					{ body }
				</div>
			</div>
			<div className="post__btns">
				<ActionButton onClick={() => props.remove(props.post)}>
					Удалить
				</ActionButton>
			</div>
		</div>
	);
};

export default PostItem;