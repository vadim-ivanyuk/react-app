import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/user/user.actions';

import { Logo } from '../Logo';
import { Button } from '../Button';

import { API_URL } from '../../utils';

import { Wrapper, Container, UserMenu, Name } from './Header.style';

export const Header = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector(({ user }) => user);

	const onLogout = () => {
		axios
			.delete(`${API_URL}/logout`, {
				headers: {
					authorization: localStorage.getItem('session_key'),
				},
			})
			.then(() => {
				dispatch(logout());
				localStorage.removeItem('session_key');
				localStorage.removeItem('user');

				history.push('/login');
			})
			.catch((error) => {
				alert(error.response.data.errors || error.response.data.result);
			});
	};

	return (
		<Wrapper>
			<Container>
				<Logo />
				<UserMenu>
					<Name>{user.name}</Name>
					<Button
						disabled={!user.token}
						text={'Logout'}
						handleClick={onLogout}
					/>
				</UserMenu>
			</Container>
		</Wrapper>
	);
};
