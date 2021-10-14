import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../store/user/user.thunks';

import { Input } from '../Input';
import { Button } from '../Button';

import { useInput } from '../../hooks';

import {
	Wrapper,
	Title,
	Form,
	FormGroup,
	InputLabel,
	RegistrationText,
} from './Login.style';

export const Login = () => {
	const email = useInput(true);
	const password = useInput(true);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('session_key')) {
			history.push('/courses');
		}
	}, [history]);

	const loginUser = (e) => {
		e.preventDefault();

		if (email.getError() && password.getError()) {
			dispatch(login(email.value, password.value, history));
		} else {
			email.getError();
			password.getError();
		}
	};

	return (
		<Wrapper>
			<Title>Login</Title>
			<Form onSubmit={loginUser}>
				<FormGroup>
					<InputLabel>Email</InputLabel>
					<Input
						type='email'
						placeholder='Enter email'
						name='email'
						input={email}
					/>
				</FormGroup>
				<FormGroup>
					<InputLabel>Password</InputLabel>
					<Input
						type='password'
						placeholder='Enter password'
						name='password'
						input={password}
					/>
				</FormGroup>
				<FormGroup center>
					<Button text='Login' handleClick={loginUser} />
				</FormGroup>
				<FormGroup>
					<RegistrationText>
						If you not have account you can
						<Link to='/registration'> Registration</Link>
					</RegistrationText>
				</FormGroup>
			</Form>
		</Wrapper>
	);
};
