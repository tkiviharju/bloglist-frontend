import { useState } from 'react';

export const useField = (type, placeholder) => {
	const [value, setValue] = useState('');

	const onChange = (event) => {
		const { value } = event.target;
		setValue(value);
	};

	const reset = () => setValue('');

	return {
		type,
		placeholder,
		value,
		onChange,
		reset
	};
};
