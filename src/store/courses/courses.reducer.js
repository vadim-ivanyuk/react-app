import * as types from './courses.types';

const initialState = [];

export const coursesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_COURSES:
			return [...payload.courses];
		case types.GET_FILTERED_COURSES:
			return [...payload.courses];
		case types.ADD_COURSE:
			return [...state, payload.course];
		case types.UPDATE_COURSE:
			return [...payload.courses];
		case types.DELETE_COURSE:
			return [...payload.courses];
		default:
			return state;
	}
};
