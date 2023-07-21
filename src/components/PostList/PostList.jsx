import React from 'react';
import "./PostList.css";
import PostItem from "../PostItem/PostItem";
import AbsenceMessage from "../AbsenceMessage/AbsenceMessage";

const PostList = (props) => {

	const { posts, title, remove } = props;

	return (
		<section className="post-list-section">
			<div className="wrapper">
				<div className="post-list main-section">

					<h1 className="post-list-title section-title">
						{title}
					</h1>

					<div className="post-list-container">
						{
							posts.length !== 0
							? posts.map((post, index) =>
									<PostItem
										remove={remove}
										number={index + 1}
										post={post}
										key={post.id}
									/>
							)
							: <AbsenceMessage/>
						}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PostList;