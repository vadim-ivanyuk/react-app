import { myCustomAxios, handleError } from '../../helpers';

import * as types from './authors.types';

export const getAuthors = () => (dispatch) => {
	myCustomAxios
		.get('/authors/all')
		.then(({ data }) => {
			dispatch({
				type: types.GET_AUTHORS,
				payload: {
					authors: data.result,
				},
			});
		})
		.catch((error) => {
			handleError(error);
		});
};

export const addAuthor = (author) => (dispatch) => {
	myCustomAxios
		.post('/authors/add', author)
		.then(({ data }) => {
			dispatch({ type: types.ADD_AUTHOR, payload: { author: data.result } });
		})
		.catch((error) => {
			handleError(error);
		});
};

export const deleteAuthor = (authorId) => (dispatch, getState) => {
	myCustomAxios
		.delete(`/authors/${authorId}`, { id: authorId })
		.then(() => {
			const updatedAuthors = getState().authors.filter(
				(author) => author.id !== authorId
			);

			dispatch({
				type: types.DELETE_AUTHOR,
				payload: {
					authors: updatedAuthors,
				},
			});
		})
		.catch((error) => {
			handleError(error);
		});
};
