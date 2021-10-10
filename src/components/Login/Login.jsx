import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';

import { API_URL } from '../../utils/apies';
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

	useEffect(() => {
		if (localStorage.getItem('session_key')) {
			history.push('/courses');
		}
	}, [history]);

	const loginUser = (e) => {
		e.preventDefault();

		if (email.getError() && password.getError()) {
			axios
				.post(`${API_URL}/login`, {
					email: email.value,
					password: password.value,
				})
				.then(({ data }) => {
					localStorage.setItem('session_key', data.result);

					history.push('/courses');
				})
				.catch((error) => {
					alert(error);
				});
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
