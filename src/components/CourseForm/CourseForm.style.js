import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
	margin-top: 15px;

	@media (max-width: 700px) {
		flex-wrap: wrap-reverse;
	}
`;

export const InputLabel = styled.label`
	display: block;
	margin-bottom: 5px;
	margin-top: 10px;
	font-weight: bold;
	cursor: pointer;
	font-size: 18px;
`;

export const AdditionalInfo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 15px;

	@media (max-width: 700px) {
		flex-direction: column;
	}
`;

export const ColumnWrapper = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export const Title = styled.p`
	width: 100%;
	text-align: center;
	font-size: 22px;
	font-weight: bold;
`;
