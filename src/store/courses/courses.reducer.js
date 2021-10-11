import * as types from './courses.types';

const initialState = [];

export const coursesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.SET_COURSES:
			return [...payload.course];
		case types.ADD_COURSE:
			return [...state, payload.course];
		case types.DELETE_COURSE:
			return state.filter((course) => course.id !== payload.courseId);
		default:
			return state;
	}
};
