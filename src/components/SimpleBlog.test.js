import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SimpleBlog from './SimpleBlog.jsx';

afterEach(cleanup);

test('renders content', () => {
	const blog = {
		title: 'How to catch the Joker',
		author: 'The Batman',
		likes: 2,
	};

	const component = render(
		<SimpleBlog blog={blog} />
	);

	expect(component.container).toHaveTextContent(
		'How to catch the Joker The Batman'
	);
	expect(component.container).toHaveTextContent(
		'blog has 2 likes'
	);
});


test('clicking the button twice calls the event handler twice', async () => {
	const blog = {
		title: 'How to catch the Joker',
		author: 'The Batman',
		likes: 2,
	};

	const mockHandler = jest.fn();

	const { getByText } = render(
		<SimpleBlog blog={blog} onClick={mockHandler} />
	);

	const button = getByText('like');
	fireEvent.click(button);
	fireEvent.click(button);

	expect(mockHandler.mock.calls.length).toBe(2);
});