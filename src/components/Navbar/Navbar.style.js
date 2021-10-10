import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 15px 0px;

	@media (max-width: 600px) {
		flex-direction: column;
		height: 100px;
	}
`;

export const Search = styled.form`
	width: 350px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 400px) {
		flex-direction: column;
		height: 80px;
		width: 100%;
		justify-content: space-evenly;
	}
`;
