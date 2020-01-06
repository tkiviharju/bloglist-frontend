import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LoginService from './services/login.js';
import BlogService from './services/blogs.js';
import promiseHandler from './utils/helpers.js';

import LoginForm from './components/LoginForm.jsx';
import Blogs from './components/Blogs.jsx';

const App = () => {
	const [ user, setUser ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ blogs, setBlogs ] = useState([]);

	useEffect(() => {
		BlogService
			.getAll()
			.then(blogs => setBlogs(blogs))
			.catch(error => console.log(error));

	}, []);

	useEffect(() => {
		const loggedUser = window.localStorage.getItem('user');
		if (loggedUser) {
			const user = JSON.parse(loggedUser);
			setUser(user);
			BlogService.setToken(user.token);
		}
		setLoading(false);
	}, []);

	const addBlog = async (newBlog) => {
		const [ savedBlog, error ] = await promiseHandler(BlogService.create(newBlog));
		return error ?
			console.log(error)
			:
			setBlogs(blogs.concat(savedBlog));
	};

	const handleLogin = async (credentials) => {
		const [ user, error ] = await promiseHandler(LoginService.login(credentials));
		if (error){
			console.log('error', error);
			return;
		}
		setUser(user);
		window.localStorage.setItem('user', JSON.stringify(user));

	};

	const handleLogout = () => {
		setUser(null);
		window.localStorage.removeItem('user');
		BlogService.setToken(null);
	};

	return (
		<StyledWrapper>
			<StyledTitle>Bloglist</StyledTitle>
			{loading ? (
				null
			) : (
				user ?
					<Blogs
						user={user}
						blogs={blogs}
						addBlog={addBlog}
						handleLogout={handleLogout}
					/>
					:
					<LoginForm handleLogin={handleLogin} />
			)}
		</StyledWrapper>
	);
};

const StyledTitle = styled.h1`
	color: #4e5ca6;
`;

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

`;

export default App;
