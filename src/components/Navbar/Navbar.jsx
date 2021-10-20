import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
	getCourses,
	getFilteredCourses,
} from '../../store/courses/courses.thunks';

import { Button } from '../Button';
import { Input } from '../Input';

import { useInput } from '../../hooks';

import { Wrapper, Search } from './Navbar.style';

export const Navbar = () => {
	const role = useSelector(({ user }) => user.role);
	const searchInput = useInput();
	const { value } = searchInput;
	const dispatch = useDispatch();

	useEffect(() => {
		if (!value) {
			dispatch(getCourses());
		}
	}, [value, dispatch]);

	const search = (e) => {
		e.preventDefault();

		dispatch(getFilteredCourses(value));
	};

	return (
		<Wrapper>
			<Search onSubmit={search}>
				<Input
					type='text'
					placeholder='Enter course name...'
					name='search'
					input={searchInput}
				/>
				<Button text='Search' handleClick={search} />
			</Search>
			<Link to='/courses/add'>
				{role === 'admin' && <Button text='Add new course' />}
			</Link>
		</Wrapper>
	);
};
