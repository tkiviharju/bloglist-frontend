import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Blog = ({ blog, setLike, deleteBlog, currentUser }) => {
	const { title, author, likes, url, user, id } = blog;
	const [ showFull, setShowFull ] = useState(false);

	const handleClick = () => setShowFull(!showFull);

	const handleLike = () => {
		const deepCopy = JSON.parse(JSON.stringify(blog));
		deepCopy.likes++;
		deepCopy.user = deepCopy.user.id;
		setLike(deepCopy);
	};

	const handleDelete = () => {
		if (window.confirm(`Remove blog ${title} by ${author}`)){
			deleteBlog(id);
		}
	};

	return (
		<StyledContainer onClick={handleClick}>
			{showFull ? (
				<StyledColumn>
					{title} by {author}
					<a target='_blank' rel='noopener noreferrer' href={`//${url}`}>{url}</a>
					<div>{likes} likes <button onClick={handleLike}>Like</button></div>
					<div>added by {user.name}</div>
					{currentUser === user.username && <StyledDelete onClick={handleDelete}>Remove</StyledDelete>}
				</StyledColumn>
			) : (
				<div>{title} by {author} </div>
			)}
		</StyledContainer>
	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	setLike: PropTypes.func.isRequired,
	deleteBlog: PropTypes.func.isRequired,
	currentUser: PropTypes.string.isRequired,
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
	button {
		cursor: pointer;
		padding: 5px;
	}
`;

const StyledDelete = styled.button`
	max-width: fit-content;
	background-color: #9c3b3b !important;
	border-color: #9c3b3b;
`;

export default Blog;