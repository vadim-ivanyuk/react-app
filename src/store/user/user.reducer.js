import * as types from './user.types';

const isAuth = localStorage.getItem('session_key') ? true : false;

const initialState = {
	isAuth,
	name: isAuth ? JSON.parse(localStorage.getItem('user')).name : '',
	email: isAuth ? JSON.parse(localStorage.getItem('user')).email : '',
	token: localStorage.getItem('session_key') || null,
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
				name: '',
				email: '',
				token: null,
			};
		default:
			return state;
	}
};
