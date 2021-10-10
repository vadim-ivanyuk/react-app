import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Logo } from '../Logo';
import { Button } from '../Button';

import { API_URL } from '../../utils';

import { Wrapper, Container, UserMenu, Name } from './Header.style';

export const Header = () => {
	const history = useHistory();

	const logout = () => {
		axios
			.delete(`${API_URL}/logout`, {
				headers: {
					authorization: localStorage.getItem('session_key'),
				},
			})
			.then(() => {
				localStorage.removeItem('session_key');

				history.push('/login');
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<Wrapper>
			<Container>
				<Logo />
				<UserMenu>
					<Name>Vadym</Name>
					<Button text={'Logout'} handleClick={logout} />
				</UserMenu>
			</Container>
		</Wrapper>
	);
};
