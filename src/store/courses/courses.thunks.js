import { myCustomAxios, handleError } from '../../helpers';

import * as types from './courses.types';

export const getCourses = () => (dispatch) => {
	myCustomAxios
		.get('/courses/all')
		.then(({ data }) => {
			dispatch({
				type: types.GET_COURSES,
				payload: {
					courses: data.result,
				},
			});
		})
		.catch((error) => {
			handleError(error);
		});
};

export const getFilteredCourses = (title) => (dispatch) => {
	myCustomAxios
		.get(`/courses/filter?title=${title}`)
		.then(({ data }) => {
			dispatch({
				type: types.GET_FILTERED_COURSES,
				payload: {
					courses: data.result,
				},
			});
		})
		.catch((error) => {
			handleError(error);
		});
};

export const addCourse = (course, history) => (dispatch) => {
	myCustomAxios
		.post('/courses/add', course)
		.then(({ data }) => {
			dispatch({ type: types.ADD_COURSE, payload: { course: data.result } });

			history.push('/courses');
		})
		.catch((error) => {
			handleError(error);
		});
};

export const updateCourse =
	(courseId, course, history) => (dispatch, getState) => {
		myCustomAxios
			.put(`/courses/${courseId}`, course)
			.then(({ data }) => {
				const updatedCourses = getState().courses.reduce((acc, item) => {
					if (item.id === courseId) {
						acc.push(data.result);
					} else {
						acc.push(item);
					}

					return acc;
				}, []);

				dispatch({
					type: types.UPDATE_COURSE,
					payload: {
						courses: updatedCourses,
					},
				});

				history.push('/courses');
			})
			.catch((error) => {
				handleError(error);
			});
	};

export const deleteCourse = (courseId) => (dispatch, getState) => {
	myCustomAxios
		.delete(`/courses/${courseId}`, { id: courseId })
		.then(() => {
			const upatedCourses = getState().courses.filter(
				(course) => course.id !== courseId
			);

			dispatch({
				type: types.DELETE_COURSE,
				payload: {
					courses: upatedCourses,
				},
			});
		})
		.catch((error) => {
			handleError(error);
		});
};
