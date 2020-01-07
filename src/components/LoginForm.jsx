import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useField from '../hooks/index.js';

const LoginForm = ({ handleLogin }) => {
	const username = useField('text');
	const password = useField('password');

	const handleSubmit = (event) => {
		event.preventDefault();
		const credentials = {
			username,
			password
		};
		handleLogin(credentials);
	};

	return (
		<StyledWrapper>
			<h2>Login to application</h2>
			<StyledForm onSubmit={handleSubmit}>
				<input {...username} />
				<input {...password} />
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