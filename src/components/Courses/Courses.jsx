import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getAuthors } from '../../store/authors/authors.thunks';

import { Navbar } from '../Navbar';
import { CoursesList } from './CoursesList';

export const Courses = () => {
	const history = useHistory();
	const courses = useSelector(({ courses }) => courses);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!localStorage.getItem('session_key')) {
			history.push('/login');
		}

		dispatch(getAuthors());
	}, [dispatch, history]);

	return (
		<>
			<Navbar />
			<CoursesList courses={courses} />
		</>
	);
};
