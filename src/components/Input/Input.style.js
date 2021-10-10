import styled from 'styled-components';

import { red } from '../../theme';

export const Inp = styled.input`
	width: 250px;
	height: 30px;
	padding: 4px 5px;
	border: ${({ error }) => error && `1px solid ${red}`};

	@media (max-width: 300px) {
		width: 100%;
	}
`;

export const Error = styled.p`
	font-size: 14px;
	margin-top: 5px;
	color: ${red};
	padding-left: 5px;
`;
