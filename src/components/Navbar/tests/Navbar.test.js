import React from 'react';
import 'regenerator-runtime/runtime';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { Navbar } from '../Navbar';

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

describe('Navbar test', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		);
	});

	it('CreateCourse should show after a click on a button "Add new course"', () => {
		expect(global.location.pathname).toEqual('/');

		fireEvent.click(screen.getByTestId('addNewCourse'));

		expect(global.location.pathname).toEqual('/courses/add');
	});
});
