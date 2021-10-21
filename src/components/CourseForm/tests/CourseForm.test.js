import React from 'react';
import * as redux from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { CourseForm } from '../CourseForm';

const mockState = [
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
];

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
	const ActualReactRedux = jest.requireActual('react-redux');
	return {
		...ActualReactRedux,
		useSelector: jest.fn().mockImplementation(() => {
			return mockState;
		}),
		useDispatch: () => mockDispatch,
	};
});

describe('Course form test', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<CourseForm />
			</BrowserRouter>
		);
	});

	it('CreateCourse should show authors list', () => {
		expect(screen.getByTestId('authorsList')).toBeInTheDocument();
	});

	test('CreateCourse add an author to all authors list', () => {
		const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
		const mockDispatchFn = jest.fn();
		useDispatchSpy.mockReturnValue(mockDispatchFn);

		const createAuthor = screen.getByRole('button', {
			name: 'Create Author',
		});

		fireEvent.change(screen.getByTestId('authorName'), {
			target: { value: 'TestAuthor' },
		});

		expect(mockDispatchFn).toHaveBeenCalledTimes(0);

		fireEvent.click(createAuthor);

		expect(mockDispatchFn).toHaveBeenCalledTimes(1);

		useDispatchSpy.mockClear();
	});

	test('CreateCourse add an author to course authors list', () => {
		const addAuthorButtons = screen.getAllByRole('button', {
			name: 'Add author',
		});

		expect(screen.queryAllByTestId('courseAuthor').length).toEqual(0);

		fireEvent.click(addAuthorButtons[0]);

		expect(screen.queryAllByTestId('courseAuthor').length).toEqual(1);
	});

	test('CreateCourse delete an author from course authors list', () => {
		const addAuthorButtons = screen.getAllByRole('button', {
			name: 'Add author',
		});

		fireEvent.click(addAuthorButtons[0]);
		fireEvent.click(addAuthorButtons[1]);

		const deleteAuthorButtons = screen.queryAllByRole('button', {
			name: 'Delete course author',
		});

		expect(deleteAuthorButtons.length).toEqual(2);

		fireEvent.click(deleteAuthorButtons[0]);

		const deleteAuthorButtonsAfterDeleteClick = screen.queryAllByRole(
			'button',
			{
				name: 'Delete course author',
			}
		);

		expect(deleteAuthorButtonsAfterDeleteClick.length).toEqual(1);
	});
});
