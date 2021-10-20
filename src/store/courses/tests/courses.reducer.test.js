import { coursesReducer } from '../courses.reducer';

const mockInitialCourses = [];

const mockActionAddCourse = {
	type: 'ADD_COURSE',
	payload: {
		course: {
			id: 'id',
			title: 'title',
			description: 'description',
			creationDate: '20/10/2021',
			duration: 120,
			authors: [
				'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
				'1c972c52-3198-4098-b6f7-799b45903199',
			],
		},
	},
};

const mockActionGetCourses = {
	type: 'GET_COURSES',
	payload: {
		courses: [
			{
				id: 'id',
				title: 'title',
				description: 'description',
				creationDate: '20/10/2021',
				duration: 120,
				authors: [
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
					'1c972c52-3198-4098-b6f7-799b45903199',
				],
			},
			{
				id: 'id2',
				title: 'title2',
				description: 'description2',
				creationDate: '20/10/2021',
				duration: 120,
				authors: [
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
					'1c972c52-3198-4098-b6f7-799b45903199',
				],
			},
		],
	},
};

describe('Test courses reducer', () => {
	it('reducer should return the initial state', () => {
		expect(
			coursesReducer(mockInitialCourses, { type: 'UNDEFINED_TYPE' })
		).toEqual(mockInitialCourses);
	});

	it('reducer should handle ADD_COURSES', () => {
		const expexted = mockInitialCourses.concat(
			mockActionAddCourse.payload.course
		);

		expect(coursesReducer(mockInitialCourses, mockActionAddCourse)).toEqual(
			expexted
		);
	});

	it('reducer should handle GET_COURSES', () => {
		expect(coursesReducer(mockInitialCourses, mockActionGetCourses)).toEqual(
			mockActionGetCourses.payload.courses
		);
	});
});
