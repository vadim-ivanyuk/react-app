import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCourses } from '../../store/courses/courses.thunks';
import { getAuthors } from '../../store/authors/authors.thunks';

import { Navbar } from '../Navbar';
import { CoursesList } from './CoursesList';

export const isIncludes = (courseParam, searchQueries) =>
	courseParam.toUpperCase().includes(searchQueries.toUpperCase());

const filterCourses = (searchQueries, courses) => {
	if (!searchQueries.length) {
		return courses;
	}

	return courses.reduce((acc, course) => {
		if (
			isIncludes(course.id, searchQueries) ||
			isIncludes(course.title, searchQueries)
		) {
			acc.push(course);
		}

		return acc;
	}, []);
};

export const Courses = () => {
	const [filteredCourses, setFilteredCourses] = useState([]);
	const [searchQueries, setSearchQueries] = useState('');
	const courses = useSelector(({ courses }) => courses);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCourses());
		dispatch(getAuthors());
	}, [dispatch]);

	useEffect(() => {
		setFilteredCourses(filterCourses(searchQueries, courses));
	}, [searchQueries, courses]);

	return (
		<>
			<Navbar setSearchQueries={setSearchQueries} />
			<CoursesList filteredCourses={filteredCourses} />
		</>
	);
};
