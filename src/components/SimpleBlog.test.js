import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import SimpleBlog from './SimpleBlog.jsx';

afterEach(cleanup);

test('renders content', () => {
	const blog = {
		title: 'How to catch the Joker',
		author: 'The Batman',
		likes: 2,
	};

	const onClick = () => console.log('click');

	const component = render(
		<SimpleBlog blog={blog} onClick={onClick}/>
	);

	expect(component.container).toHaveTextContent(
		'How to catch the Joker The Batman'
	);
	expect(component.container).toHaveTextContent(
		'blog has 2 likes'
	);
});