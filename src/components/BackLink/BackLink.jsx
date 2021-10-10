import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BackLinkWrapper } from './BackLink.style';

export const BackLink = ({ to, text }) => {
	return (
		<BackLinkWrapper>
			<Link to={to}>{text}</Link>
		</BackLinkWrapper>
	);
};

BackLink.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
