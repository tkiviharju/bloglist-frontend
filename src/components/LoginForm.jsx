import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoginForm = ({ handleLogin }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const credentials = {
			username,
			password
		};
		handleLogin(credentials);
	};


	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === 'username'){
			setUsername(value);

		} else if (name === 'password'){
			setPassword(value);
		}
	};

	return (
		<StyledWrapper>
			<h2>Login to application</h2>
			<StyledForm onSubmit={handleSubmit}>
				<input
					type='text'
					onChange={handleChange}
					name='username'
					placeholder='username'
					value={username}
				/>
				<input
					type='password'
					onChange={handleChange}
					name='password'
					placeholder='password'
					value={password}
				/>
				<StyledButton type='submit' value='Login'/>
			</StyledForm>
		</StyledWrapper>
	);
};

LoginForm.propTypes = {
	handleLogin: PropTypes.func.isRequired
};

const StyledWrapper = styled.div`

`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 600px;

`;

const StyledButton = styled.input`
	max-width: 100px;
	cursor: pointer;
	outline: none;
	background-color: #368636; 
`;

export default LoginForm;