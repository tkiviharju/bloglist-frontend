import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = ({ handleLogin }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('TODO validate credentials', username, password);
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
				<StyledInput
					type='text'
					onChange={handleChange}
					name='username'
					placeholder='username'
					value={username}
				/>
				<StyledInput
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

const StyledWrapper = styled.div`

`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 600px;

`;

const StyledInput = styled.input`
	margin: 5px;
	padding: 10px;
`;

const StyledButton = styled(StyledInput)`
	max-width: 100px;
	cursor: pointer;
	outline: none;
	background-color: #368636; 
`;

export default LoginForm;