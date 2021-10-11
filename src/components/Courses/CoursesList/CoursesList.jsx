import React from 'react';

import { CourseCard } from '../../CourseCard';

export const CoursesList = ({ filteredCourses }) => (
	<>
		{filteredCourses.map((course) => {
			return <CourseCard key={course.id} course={course} />;
		})}
	</>
);
