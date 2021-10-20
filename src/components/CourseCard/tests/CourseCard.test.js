import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { convertDuration, getAuthorsNamesById } from '../../../helpers';
import { CourseCard } from '..';

const mockState = {
	user: {
		isAuth: true,
		name: null,
		email: 'admin@email.com',
		token:
			'Bearer qYw2uP2rnmUz+B2py84hG9WXwfz1yZELQE5bJoZc4sF9yWREgRgklfxkhv+7TpakN4GoyTLfK+pz4V5qGsNRWQrGqApMcnJb9+r4OLm7bUAkrwR8G9CI42c7I3wurGZWBlVKL0wGJfGa/WFdTaACloeiPhfDBh+ageionv6tHE+JPRbJPsEpnVl9NCoH3jxgM+fE1JYBmhLKa3wjvPkboLj4UT1O3M4FvHk2OOqf5ARFVZ1p9E76pF/QtntJRGKrjJP8nysnoxhrmBmndT8qSv4pXrhoSygvVZZbHOwkix8eOK4el505seMgQ6OjSHbzpZBlBNPjFQgdtpnC66/bgA==',
		role: 'admin',
	},
	courses: [],
	authors: [
		{
			name: 'author',
			id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		},
		{
			name: 'author2',
			id: '1c972c52-3198-4098-b6f7-799b45903199',
		},
		{
			name: 'author3',
			id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
		},
	],
};

const mockCourse = {
	id: 'id',
	title: 'title',
	description: 'description',
	creationDate: '20/10/2021',
	duration: 120,
	authors: [
		'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		'1c972c52-3198-4098-b6f7-799b45903199',
	],
};

jest.mock('react-redux', () => {
	const ActualReactRedux = jest.requireActual('react-redux');
	return {
		...ActualReactRedux,
		useSelector: jest.fn().mockImplementation(() => {
			return mockState;
		}),
		useDispatch: jest.fn(),
	};
});

describe('Course card test', () => {
	let component;

	beforeEach(() => {
		component = render(
			<BrowserRouter>
				<CourseCard course={mockCourse} />
			</BrowserRouter>
		);
	});

	it('CourseCard should display title', () => {
		expect(component.getByTestId('title')).toHaveTextContent(mockCourse.title);
	});

	it('CourseCard should display description', () => {
		expect(component.getByTestId('description')).toHaveTextContent(
			mockCourse.description
		);
	});

	it('CourseCard should display piped duration', () => {
		expect(component.getByTestId('duration')).toHaveTextContent(
			`Duration: ${convertDuration(mockCourse.duration)}`
		);
	});

	it('CourseCard should display authors list', () => {
		const expectedAuthors = getAuthorsNamesById(
			mockCourse.authors,
			mockState.authors
		).join(', ');

		expect(component.getByTestId('authors')).toHaveTextContent(
			`Authors: ${expectedAuthors}`
		);
	});

	it('CourseCard should display created date', () => {
		expect(component.getByTestId('created')).toHaveTextContent(
			`Created: ${mockCourse.creationDate}`
		);
	});
});
