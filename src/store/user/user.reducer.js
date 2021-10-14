import * as types from './user.types';

const isAuth = localStorage.getItem('session_key') ? true : false;

const initialState = {
	isAuth,
	name: isAuth ? JSON.parse(localStorage.getItem('user')).name : null,
	email: isAuth ? JSON.parse(localStorage.getItem('user')).email : null,
	token: localStorage.getItem('session_key') || null,
	role: isAuth ? JSON.parse(localStorage.getItem('user')).role : null,
};

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.LOGIN:
			return {
				isAuth: true,
				...payload.user,
				token: payload.token,
			};

		case types.LOGOUT:
			return {
				isAuth: false,
				name: null,
				email: null,
				token: null,
				role: null,
			};
		default:
			return state;
	}
};
