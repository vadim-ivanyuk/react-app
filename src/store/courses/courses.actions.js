import * as types from './courses.types';

export const setCourses = (course) => {
	return {
		type: types.SET_COURSES,
		payload: {
			course,
		},
	};
};

export const addCourse = (course) => {
	return {
		type: types.ADD_COURSE,
		payload: {
			course,
		},
	};
};

export const deleteCourse = (courseId) => {
	return {
		type: types.DELETE_COURSE,
		payload: {
			courseId,
		},
	};
};
