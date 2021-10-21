import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './Button.style';

export const Button = ({ text, handleClick, disabled }) => (
	<Btn
		role='button'
		data-testid='button'
		disabled={disabled}
		onClick={handleClick}
	>
		{text}
	</Btn>
);

Button.defaultProps = {
	text: 'Button',
	handleClick: () => {},
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};
