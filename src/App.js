import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LoginService from './services/login.js';
import BlogService from './services/blogs.js';
import promiseHandler from './utils/helpers.js';

import Notification from './components/Notification.jsx';
import LoginForm from './components/LoginForm.jsx';
import Blogs from './components/Blogs.jsx';

const App = () => {
	const [ user, setUser ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ blogs, setBlogs ] = useState([]);
	const [ notification, setNotification ] = useState('');
	const [ error, setError ] = useState(false);

	useEffect(() => {
		BlogService
			.getAll()
			.then(blogs => setBlogs(blogs))
			.catch(error => setNotification(error.error, true));

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


	const handleNotification = (notification, error) => {
		if (typeof(notification) === 'object'){
			console.log(Object.keys(notification));
			console.log(notification.response);
		}
		if (error)
			console.error(notification);

		setNotification(notification);
		setError(error);
		setTimeout(() => {
			setNotification('');
			setError(false);
		}, 5000);
	};


	const addBlog = async (newBlog) => {
		const [ savedBlog, error ] = await promiseHandler(BlogService.create(newBlog));
		console.log(error);
		if (error)
			return handleNotification(error, true);

		const noti = `New blog, ${savedBlog.title} saved!`;
		handleNotification(noti, false);
		setBlogs(blogs.concat(savedBlog));
	};


	const handleLogin = async (credentials) => {
		const [ loggedUser, error ] = await promiseHandler(LoginService.login(credentials));
		if (error)
			return handleNotification(error, true);

		setUser(loggedUser);
		const noti = 'Login successful!';
		handleNotification(noti, false);
		window.localStorage.setItem('user', JSON.stringify(loggedUser));

	};


	const handleLogout = () => {
		setUser(null);
		window.localStorage.removeItem('user');
		BlogService.setToken(null);
	};


	return (
		<StyledWrapper>
			{notification && <Notification notification={notification} error={error}/>}
			<StyledTitle>Bloglist</StyledTitle>
			{loading ? (
				null
			) : (
				user ?
					<Blogs
						user={user}
						blogs={blogs}
						addBlog={addBlog}
						handleNotification={handleNotification}
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
	margin-top: 30px;
`;

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

`;

export default App;
