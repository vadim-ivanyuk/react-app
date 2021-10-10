import styled from 'styled-components';

import { red } from '../../../theme';

export const MainInfoContainer = styled.div`
	width: 100%;
	margin-top: 15px;
`;

export const Textarea = styled.textarea`
	width: 100%;
	height: 120px;
	padding: 4px 5px;
	resize: none;
	border: ${({ error }) => error && `1px solid ${red}`};
`;

export const Error = styled.p`
	font-size: 14px;
	color: ${red};
	padding-left: 5px;
`;
