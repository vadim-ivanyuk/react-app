import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

export const Courses = ({ courses, authors }) => {
	const [filteredCourses, setFilteredCourses] = useState([]);
	const [searchQueries, setSearchQueries] = useState('');

	useEffect(() => {
		setFilteredCourses(filterCourses(searchQueries, courses));
	}, [searchQueries, courses]);

	return (
		<>
			<Navbar setSearchQueries={setSearchQueries} />
			<CoursesList filteredCourses={filteredCourses} authors={authors} />
		</>
	);
};

Courses.propTypes = {
	courses: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
};
