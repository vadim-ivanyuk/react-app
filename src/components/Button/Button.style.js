import styled from 'styled-components';

import { black, orange } from '../../theme';

export const Btn = styled.button`
	min-width: max-content;
	max-height: 30px;
	color: ${orange};
	border: 1px solid ${orange};
	font-weight: 400;
	font-size: 14px;
	background: transparent;
	padding: 0.3rem 0.75rem;
	transition: all 0.3s ease 0s;
	cursor: pointer;

	&:hover {
		background: ${orange};
		color: ${black};
	}
`;
