import React from 'react';
import styled from 'styled-components';

import Blog from './Blog.jsx';


const Blogs = ({ user, blogs, handleLogout }) => {
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
			{blogs.length > 0 && blogs.map(blog => <div key={blog.title}>
				<Blog blog={blog} />
			</div>)}
		</div>
	);
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