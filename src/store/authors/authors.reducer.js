import * as types from './authors.types';

const initialState = [];

export const authorsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.SET_AUTHORS:
			return [...payload.authors];
		case types.ADD_AUTHOR:
			return [...state, payload.author];
		default:
			return state;
	}
};
