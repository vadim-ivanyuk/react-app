import React from 'react';
import PropTypes from 'prop-types';

import { CourseCard } from '../../CourseCard';

export const CoursesList = ({ filteredCourses }) => (
	<>
		{filteredCourses.map((course) => {
			return <CourseCard key={course.id} course={course} />;
		})}
	</>
);

CoursesList.propTypes = {
	filteredCourses: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			creationDate: PropTypes.string.isRequired,
			duration: PropTypes.number.isRequired,
			authors: PropTypes.array.isRequired,
		})
	),
};
