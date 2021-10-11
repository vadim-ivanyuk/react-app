import * as types from './authors.types';

export const setAuthors = (authors) => {
	return {
		type: types.SET_AUTHORS,
		payload: {
			authors,
		},
	};
};

export const addAuthor = (author) => {
	return {
		type: types.ADD_AUTHOR,
		payload: {
			author,
		},
	};
};
