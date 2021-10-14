import { handleError, myCustomAxios } from '../../helpers';

import * as types from './user.types';

const admins = ['admin@email.com'];

export const login = (email, password, history) => {
	return (dispatch) => {
		myCustomAxios
			.post(`/login`, {
				email,
				password,
			})
			.then(({ data }) => {
				localStorage.setItem('session_key', data.result);
				localStorage.setItem(
					'user',
					JSON.stringify({
						...data.user,
						role: admins.includes(email) ? 'admin' : 'user',
					})
				);

				dispatch({
					type: types.LOGIN,
					payload: {
						user: JSON.parse(localStorage.getItem('user')),
						token: data.result,
					},
				});

				history.push('/courses');
			})
			.catch((error) => {
				handleError(error);
			});
	};
};

export const registration = (name, email, password, history) => (dispatch) => {
	myCustomAxios
		.post('/register', { name, email, password })
		.then(() => {
			history.push('/login');
		})
		.catch((error) => {
			handleError(error);
		});
};

export const logout = (history) => {
	return (dispatch) => {
		myCustomAxios
			.delete(`/logout`)
			.then(() => {
				localStorage.removeItem('session_key');
				localStorage.removeItem('user');

				dispatch({
					type: types.LOGOUT,
				});

				history.push('/login');
			})
			.catch((error) => {
				handleError(error);
			});
	};
};
