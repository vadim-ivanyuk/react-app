import * as types from './authors.types';

const initialState = [];

export const authorsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_AUTHORS:
			return [...payload.authors];
		case types.ADD_AUTHOR:
			return [...state, payload.author];
		case types.DELETE_AUTHOR:
			return [...payload.authors];
		default:
			return state;
	}
};
