import React, { useState } from 'react';
import styled from 'styled-components';


const NewBlog = ({ addBlog }) => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ url, setUrl ] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === 'url'){
			setUrl(value);
		} else if (name === 'author'){
			setAuthor(value);
		} else if (name === 'title'){
			setTitle(value);
		}
	};

	const resetInputs = () => {
		setTitle('');
		setAuthor('');
		setUrl('');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newBlog = {
			title,
			author,
			url
		};
		addBlog(newBlog);
		resetInputs();

	};

	return (
		<div>
			<h3>Add new</h3>
			<StyledForm onSubmit={handleSubmit}>
				<input
					placeholder={'Title'}
					value={title}
					type='text'
					onChange={handleChange}
					name='title'
				/>
				<input
					placeholder={'Author'}
					value={author}
					type='text'
					onChange={handleChange}
					name='author'
				/>
				<input
					placeholder={'Url'}
					value={url}
					type='text'
					onChange={handleChange}
					name='url'
				/>
				<StyledButton type='submit' value='Add' />
			</StyledForm>
		</div>
	);
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
`;

const StyledButton = styled.input`
	padding: 10px;
	max-width: 100px;
	background-color: #293990;
	cursor: pointer;
	outline: none;
	border-color: #293990;
`;


export default NewBlog;