import React from 'react';
import styled from 'styled-components';

import NewBlog from './NewBlog.jsx';
import Blog from './Blog.jsx';
import Togglabble from './Togglabble.jsx';
import PropTypes from 'prop-types';


const Blogs = ({ user, blogs, handleLogout, addBlog, NewBlogRef, handleNotification, setLike, deleteBlog, currentUser }) => {
	if (!user) return;

	const handleClick = () => (
		handleLogout()
	);

	const { name } = user;
	return (
		<div>
			<StyledName>
				{name} logged in. <StyledButton onClick={handleClick}>logout</StyledButton>
			</StyledName>
			<Togglabble buttonLabel='Add new' ref={NewBlogRef}>
				<NewBlog addBlog={addBlog} handleNotification={handleNotification}/>
			</Togglabble>
			<>
				{blogs.length > 0 && blogs.map(blog => <div key={blog.title}>
					<Blog blog={blog} setLike={setLike} currentUser={currentUser} deleteBlog={deleteBlog}/>
				</div>)}
			</>
		</div>
	);
};

Blogs.propTypes = {
	user: PropTypes.object.isRequired,
	blogs: PropTypes.array.isRequired,
	handleLogout: PropTypes.func.isRequired,
	addBlog: PropTypes.func.isRequired,
	NewBlogRef: PropTypes.object.isRequired,
	handleNotification: PropTypes.func.isRequired,
	setLike: PropTypes.func.isRequired,
	deleteBlog: PropTypes.func.isRequired,
	currentUser: PropTypes.string.isRequired
};


const StyledName = styled.div`
	margin: 10px 0;
`;

const StyledButton = styled.button`
	margin-left: 5px;
	padding: 5px;
	cursor: pointer;
`;



export default Blogs;