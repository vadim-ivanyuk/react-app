import * as types from './user.types';

export const login = (user, token) => {
	return {
		type: types.LOGIN,
		payload: {
			user,
			token,
		},
	};
};

export const logout = () => {
	return {
		type: types.LOGOUT,
	};
};
