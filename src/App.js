import React, { useState, useEffect } from 'react';

import LoginService from './services/login.js';
import BlogService from './services/blogs.js';
import promiseHandler from './utils/helpers.js';

import LoginForm from './components/LoginForm.jsx';
import Blogs from './components/Blogs.jsx';

const App = () => {
	const [ user, setUser ] = useState();
	const [ blogs, setBlogs ] = useState([]);

	useEffect(() => {
		BlogService
			.getAll()
			.then(blogs => setBlogs(blogs))
			.catch(error => console.log(error));

	}, [ user ]);

	const handleLogin = async (credentials) => {
		const [ user, error ] = await promiseHandler(LoginService.login(credentials));
		if (error){
			console.log('error', error);
			return;
		}
		setUser(user);

	};

	return (
		<div>
			{user ?
				<Blogs user={user} blogs={blogs}/>
				:
				<LoginForm handleLogin={handleLogin} />

			}
		</div>
	);
};

export default App;
