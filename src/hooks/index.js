import { useState } from 'react';

export const useField = (type) => {
	const [value, setValue] = useState('');

	const onChange = (event) => {
		const { value } = event.target;
		setValue(value);
	};

	return {
		type,
		value,
		onChange
	};
};
