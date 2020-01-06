import React, { useState } from 'react';
import styled from 'styled-components';


const NewBlog = ({ addBlog, handleNotification }) => {
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

	const validateInput = (newBlog) => {
		const errors = Object.keys(newBlog).map(key => {
			if (newBlog[key].length < 3)
				return ` ${key}`;
		}).filter(key => key);
		return errors;

	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newBlog = {
			title,
			author,
			url
		};
		const errors = validateInput(newBlog);
		if (errors.length){
			const noti = `Following inputs must be over 3 characters: ${errors.toString()}`;
			return handleNotification(noti, true);
		}
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