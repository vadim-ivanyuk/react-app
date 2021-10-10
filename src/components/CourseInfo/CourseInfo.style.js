import styled from 'styled-components';

export const TitleWrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.p`
	font-size: 40px;
	letter-spacing: 1px;
	font-weight: bold;

	@media (max-width: 600px) {
		font-size: 25px;
	}
`;

export const Info = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const Description = styled.p`
	width: 50%;
	text-align: justify;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const AdditionalInfo = styled.div`
	width: 40%;

	@media (max-width: 600px) {
		width: 100%;
		margin-top: 20px;
	}
`;
