import React from 'react';

import { LogoText } from './Logo.style';

export const Logo = () => {
	return (
		<LogoText data-testid='logo'>
			React <span>App</span>
		</LogoText>
	);
};
