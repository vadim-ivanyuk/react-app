import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/user/user.thunks';
import { useUser } from '../../store/selectors';

import { Logo } from '../Logo';
import { Button } from '../Button';

import { Wrapper, Container, UserMenu, Name } from './Header.style';

export const Header = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector(useUser);

	const onLogout = () => {
		dispatch(logout(history));
	};

	return (
		<Wrapper>
			<Container>
				<Logo />
				{user.isAuth && (
					<UserMenu>
						<Name data-testid='name'>{user.name}</Name>
						<Button
							disabled={!user.token}
							text={'Logout'}
							handleClick={onLogout}
						/>
					</UserMenu>
				)}
			</Container>
		</Wrapper>
	);
};
