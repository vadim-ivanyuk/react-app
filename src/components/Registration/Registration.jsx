import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Input } from '../Input';
import { Button } from '../Button';

import { useInput } from '../../hooks';
import { API_URL } from '../../utils/apies';

import {
	Wrapper,
	Title,
	Form,
	FormGroup,
	InputLabel,
	LoginText,
} from './Registration.style';

export const Registation = () => {
	const name = useInput(true);
	const email = useInput(true);
	const password = useInput(true);
	const history = useHistory();

	const registrationUser = (e) => {
		e.preventDefault();

		if (name.getError() && email.getError() && password.getError()) {
			axios
				.post(`${API_URL}/register`, {
					name: name.value,
					email: email.value,
					password: password.value,
				})
				.then(() => {
					history.push('/login');
				})
				.catch((error) => {
					alert(error.response.data.errors || error.response.data.result);
				});
		} else {
			name.getError();
			email.getError();
			password.getError();
		}
	};

	return (
		<Wrapper>
			<Title>Registration</Title>
			<Form onSubmit={registrationUser}>
				<FormGroup>
					<InputLabel>Name</InputLabel>
					<Input
						type='text'
						placeholder='Enter name'
						name='name'
						input={name}
					/>
				</FormGroup>
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
					<Button text='Registration' handleClick={registrationUser} />
				</FormGroup>
				<FormGroup>
					<LoginText>
						If you have an account you can <Link to='/login'>Login</Link>
					</LoginText>
				</FormGroup>
			</Form>
		</Wrapper>
	);
};
