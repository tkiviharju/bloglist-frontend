import React, { useState } from 'react';
import styled from 'styled-components';

const Blog = ({ blog, setLike }) => {
	const { title, author, likes, url, user } = blog;
	const [ showFull, setShowFull ] = useState(false);

	const handleClick = () => setShowFull(!showFull);

	const handleLike = () => {
		const deepCopy = JSON.parse(JSON.stringify(blog));
		deepCopy.likes++;
		deepCopy.user = deepCopy.user.id;
		setLike(deepCopy);
	};

	return (
		<StyledContainer onClick={handleClick}>
			{showFull ? (
				<StyledColumn>
					{title} by {author}
					<a href={`//${url}`}>{url}</a>
					<div>{likes} likes <button onClick={handleLike}>like</button></div>
					<div>added by {user.name}</div>
				</StyledColumn>
			) : (
				<div>{title} by {author} </div>
			)}
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	border: 1px solid grey;
	cursor: pointer;
	margin: 10px 0;
	padding: 5px;
`;

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	a{
		color: #4c9a4c;
		margin: 2px;
		width: fit-content;
	}
	div {
		margin: 2px;
	}
`;

export default Blog;