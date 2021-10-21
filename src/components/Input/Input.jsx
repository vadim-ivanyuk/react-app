import React from 'react';
import PropTypes from 'prop-types';

import { Inp, Error } from './Input.style';

export const Input = ({ type, placeholder, name, input, dataTestid }) => {
	const { error } = input;
	return (
		<>
			<Inp
				type={type}
				placeholder={placeholder}
				name={name}
				{...input}
				id={name}
				data-testid={dataTestid}
			/>
			{error && <Error>{error}</Error>}
		</>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	input: PropTypes.object.isRequired,
};
