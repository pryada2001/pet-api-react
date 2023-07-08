import './styles/App.css';
import React, {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Aside from "./components/Aside";

function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'JavaScript — язык программирования'},
		{id: 2, title: 'Basic', body: 'Basic — это база'},
		{id: 3, title: 'Python', body: 'Python — это модно, молодёжно'}
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((item) => item.id !== post.id));
	}

	return (
		<div className="App">
			<Aside/>
			<main className="main">

				{/*<PostForm create={createPost}/>*/}
				{/*{posts.length !== 0 ?*/}
				{/*		<PostList remove={removePost} posts={posts} title="Список постов"/>*/}
				{/*	:*/}
				{/*		<div style={{marginTop: "24px", fontSize: "1.2rem", textAlign: "center"}}>*/}
				{/*			Посты не найдены или отсутствуют!*/}
				{/*		</div>*/}
				{/*}*/}

				<div className="wrapper primary-block">
					<div className="text-block">
						<div className="svg-box svg-box-request">
							<svg className="svg-img" width="24" height="24" viewBox="0 0 24 24"
								 xmlns="http://www.w3.org/2000/svg" role="img">
								<title>User</title>
								<path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
								<path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
							</svg>
						</div>
						<div className="text">
							Request text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos
							distinctio id laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt
							exercitationem harum incidunt molestias omnis possimus, sapiente totam vel.
						</div>
					</div>
				</div>
				<div className="wrapper secondary-block">
					<div className="text-block">
						<div className="svg-box svg-box-response">
							<svg className="svg-img" width="24" height="24" viewBox="0 0 24 24"
								 xmlns="http://www.w3.org/2000/svg" role="img">
								<title>Web</title>
								<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/>
							</svg>
						</div>
						<div className="text">
							<div style={{fontWeight: "bold"}}>Response text.</div>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos distinctio id
								laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt exercitationem harum
								incidunt molestias omnis possimus, sapiente totam vel.
							</div>
						</div>
					</div>
				</div>
				<div className="wrapper primary-block">
					<div className="text-block">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos distinctio id
						laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt exercitationem harum
						incidunt molestias omnis possimus, sapiente totam vel.
					</div>
				</div>
				<div className="wrapper secondary-block">
					<div className="text-block">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos distinctio id
						laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt exercitationem harum
						incidunt molestias omnis possimus, sapiente totam vel.
					</div>
				</div>
				<div className="wrapper primary-block">
					<div className="text-block">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos distinctio id
						laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt exercitationem harum
						incidunt molestias omnis possimus, sapiente totam vel.
					</div>
				</div>
				<div className="wrapper secondary-block">
					<div className="text-block">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos distinctio id
						laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt exercitationem harum
						incidunt molestias omnis possimus, sapiente totam vel.
					</div>
				</div>
				<div className="wrapper primary-block">
					<div className="text-block">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos distinctio id
						laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt exercitationem harum
						incidunt molestias omnis possimus, sapiente totam vel.
					</div>
				</div>
				<div className="wrapper secondary-block">
					<div className="text-block">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos distinctio id
						laboriosam, qui velit voluptatem voluptates. Aperiam culpa cum deserunt exercitationem harum
						incidunt molestias omnis possimus, sapiente totam vel.
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
