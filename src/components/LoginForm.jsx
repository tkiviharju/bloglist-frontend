import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useField } from '../hooks';

const LoginForm = ({ handleLogin }) => {
	const username = useField('text', 'username');
	const password = useField('password', 'password');

	const handleSubmit = (event) => {
		event.preventDefault();
		const credentials = {
			username: username.value,
			password: password.value
		};
		handleLogin(credentials);
		username.reset();
		password.reset();
	};

	return (
		<StyledWrapper>
			<h2>Login to application</h2>
			<StyledForm onSubmit={handleSubmit}>
				{[username, password].map(field => {
					const { reset, ...rest } = field;
					return <input key={field.placeholder} { ...rest } />;
				})}
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