import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';

import Blog from './Blog.jsx';

afterEach(cleanup);


test('Show more details after clicking', async () => {
	const user = {
		name: 'Harley Quinn'
	};

	const blog = {
		title: 'How to kill the Batman',
		author: 'The Joker',
		likes: 5,
		url: 'www.gotham-underworld.com/blogs/2',
		user
	};

	const setLike = () => null;
	const deleteBlog = () => null;

	const blogComponent = render(
		<Blog blog={blog} currentUser={user.name} setLike={setLike} deleteBlog={deleteBlog} />
	);

	expect(blogComponent.container).toHaveTextContent('How to kill the Batman by The Joker');
	expect(blogComponent.container).not.toHaveTextContent('5 likes');
	expect(blogComponent.container).not.toHaveTextContent('added by Harley Quinn');

	const blogContainer = blogComponent.container.querySelector('.wrapper');
	fireEvent.click(blogContainer);


	expect(blogComponent.container).toHaveTextContent('How to kill the Batman by The Joker');
	expect(blogComponent.container).toHaveTextContent('5 likes');
	expect(blogComponent.container).toHaveTextContent('added by Harley Quinn');

});