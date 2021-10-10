import { useState } from 'react';

const validator = (value, minLength) => {
	if (!value) {
		return 'Required field';
	} else if (value.length < minLength) {
		return 'Length should be at least 2 characters';
	} else if (value < 1) {
		return 'Duration should be more than 0 minute';
	} else return null;
};

export const useInput = (required = false, minLength = 0, initial = '') => {
	const [value, setValue] = useState(initial);
	const [error, setError] = useState(null);

	const validateInput = (value) => {
		setError(validator(value, minLength));

		return validator(value, minLength);
	};

	return {
		value,
		onBlur: (e) => {
			required && validateInput(e.target.value);
		},
		onChange: (e) => {
			setValue(e.target.value);

			required && validateInput(e.target.value);
		},
		getError: () => {
			return !validateInput(value);
		},
		reset: () => {
			setValue('');
		},
		error,
	};
};
