import React from 'react';
import styled from 'styled-components';

import Blog from './Blog.jsx';


const Blogs = ({ user, blogs }) => {
	if (!user) return;
	console.log(user);
	const { name } = user;
	return (
		<div>
			<h2>Blogs</h2>
			<StyledName>
				{name} logged in.
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



export default Blogs;