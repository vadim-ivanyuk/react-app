import styled from 'styled-components';

import { orange } from '../../theme';

export const Wrapper = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	margin-bottom: 10px;
	border: 1px solid ${orange};

	@media (max-width: 600px) {
		flex-direction: column;
		height: 400px;
	}
`;

export const MainInfo = styled.div`
	width: 60%;
	height: 100%;
	padding: 10px 15px;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const Title = styled.p`
	font-size: 25px;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const Description = styled.p`
	text-align: justify;
	max-height: 140px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	line-height: 1.3em;
`;

export const AdditionalInfo = styled.div`
	width: 40%;
	height: 100%;
	padding: 15px;

	& > p {
		margin-bottom: 5px;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const Authors = styled.p`
	text-align: justify;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Duration = styled.p`
	text-align: justify;
`;

export const Created = styled.p`
	text-align: justify;
`;

export const Buttons = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 400px) {
		flex-direction: column;
		height: 100px;
	}
`;
