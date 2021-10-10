import styled from 'styled-components';

import { orange, white } from '../../theme';

export const LogoText = styled.p`
	font-size: 25px;
	font-weight: bold;
	color: ${white};

	& > span {
		color: ${orange};
	}
`;
