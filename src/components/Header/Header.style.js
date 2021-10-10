import styled from 'styled-components';

import { dark, white } from '../../theme';

export const Wrapper = styled.div`
	width: 100%;
	top: 0px;
	z-index: 999;
	position: sticky;
	background: ${dark};
`;

export const Container = styled.div`
	width: 100%;
	height: 80px;
	max-width: 1140px;
	padding: 0px 30px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 450px) {
		flex-direction: column;
		justify-content: space-evenly;
		height: 100px;
	}
`;

export const UserMenu = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Name = styled.p`
	color: ${white};
`;
