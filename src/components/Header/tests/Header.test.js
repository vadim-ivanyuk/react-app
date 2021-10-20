import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '../Header';

const mockState = {
	isAuth: true,
	name: 'admin',
	email: 'admin@email.com',
	token:
		'Bearer qYw2uP2rnmUz+B2py84hG9WXwfz1yZELQE5bJoZc4sF9yWREgRgklfxkhv+7TpakN4GoyTLfK+pz4V5qGsNRWQrGqApMcnJb9+r4OLm7bUAkrwR8G9CI42c7I3wurGZWBlVKL0wGJfGa/WFdTaACloeiPhfDBh+ageionv6tHE+JPRbJPsEpnVl9NCoH3jxgM+fE1JYBmhLKa3wjvPkboLj4UT1O3M4FvHk2OOqf5ARFVZ1p9E76pF/QtntJRGKrjJP8nysnoxhrmBmndT8qSv4pXrhoSygvVZZbHOwkix8eOK4el505seMgQ6OjSHbzpZBlBNPjFQgdtpnC66/bgA==',
	role: 'admin',
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

describe('Header test', () => {
	beforeEach(() => {
		render(<Header />);
	});

	it('Header should have logo', () => {
		expect(screen.getByTestId('logo')).toHaveTextContent('React App');
	});

	it('Header should display button and name', () => {
		expect(screen.getByTestId('name')).toHaveTextContent(mockState.name);
		expect(screen.getByTestId('button')).toBeInTheDocument();
	});
});
