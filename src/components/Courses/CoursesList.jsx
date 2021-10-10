import React from 'react';

import { CourseCard } from '../CourseCard';

export const CoursesList = ({ filteredCourses, authors }) => (
	<>
		{filteredCourses.map((course) => {
			return <CourseCard key={course.id} course={course} authors={authors} />;
		})}
	</>
);
