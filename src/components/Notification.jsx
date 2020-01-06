import React from 'react';
import styled from 'styled-components';

const Notification = ({ notification, error }) => {
	return (
		<StyledWrapper error={error}>
			{notification}
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 30px;
	height: auto;
	padding: 8px;
	background-color: ${props => props.error ? '#b83722':'#3b8f3f'};
`;

export default Notification;