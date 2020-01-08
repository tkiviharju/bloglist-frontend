import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useField } from '../hooks';


const NewBlog = ({ addBlog, handleNotification }) => {
	const title = useField('text', 'title');
	const author = useField('text', 'author');
	const url = useField('text', 'url');


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
			title: title.value,
			author: author.value,
			url: url.value
		};
		const errors = validateInput(newBlog);
		if (errors.length){
			const noti = `Following inputs must be over 3 characters: ${errors.toString()}`;
			return handleNotification(noti, true);
		}
		addBlog(newBlog);
		[title, author, url].forEach(value => value.reset());

	};

	return (
		<div>
			<h3>Add new</h3>
			<StyledForm onSubmit={handleSubmit}>
				{[title, author, url].map(field => {
					const { reset, ...rest } = field;
					return <input key={field.placeholder} { ...rest } />;
				})}
				<StyledButton type='submit' value='Add' />
			</StyledForm>
		</div>
	);
};

NewBlog.propTypes = {
	addBlog: PropTypes.func.isRequired,
	handleNotification: PropTypes.func.isRequired
};


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
`;

const StyledButton = styled.input`
	padding: 5px;
	max-width: 100px;
	background-color: #293990;
	cursor: pointer;
	outline: none;
	border-color: #293990;
`;


export default NewBlog;