import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.p`
	text-align: center;
	font-size: 30px;
	font-weight: bold;
`;

export const Form = styled.form`
	max-width: 250px;
	width: 100%;
	max-height: 400px;
	height: 100%;
`;

export const FormGroup = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: ${({ center }) => {
		return center && 'center';
	}};
`;

export const InputLabel = styled.label`
	display: block;
	margin-bottom: 5px;
	margin-top: 10px;
	font-weight: bold;
	cursor: pointer;
	font-size: 18px;
`;

export const RegistrationText = styled.p`
	text-align: center;
`;
