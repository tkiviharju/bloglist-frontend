/* eslint-disable react/display-name */
import React, { useState, useImperativeHandle } from 'react';
import styled from 'styled-components';

const Togglable = React.forwardRef((props, ref) => {
	const { buttonLabel, children } = props;
	const [ visible, setVisible ] = useState(false);

	const toggleVisibility = () => {
		setVisible(!visible);
	};
	useImperativeHandle(ref, () => {
		return {
			toggleVisibility
		};
	});
	return (
		<div>
			<StyledContainer show={!visible}>
				<StyledButton onClick={toggleVisibility}>{buttonLabel}</StyledButton>
			</StyledContainer>
			<StyledContainer show={visible}>
				{children}
				<StyledButton onClick={toggleVisibility}>Cancel</StyledButton>
			</StyledContainer>
		</div>
	);
});

const StyledContainer = styled.div`
	display: ${props => props.show ? '' : 'none'}
`;

const StyledButton = styled.button`
	cursor: pointer;
	padding: 7px;
	margin: 10px 0;
`;


export default Togglable;