import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BackLink } from '../BackLink';

import { convertDuration } from '../../helpers';
import { getAuthorsNamesById } from '../../helpers';

import {
	TitleWrapper,
	Title,
	Info,
	Description,
	AdditionalInfo,
} from './CourseInfo.style';

export const CourseInfo = () => {
	const [course, setCourse] = useState(null);
	const [courseAuthors, setCourseAuthors] = useState(null);
	const { params } = useRouteMatch();
	const courses = useSelector(({ courses }) => courses);
	const authors = useSelector(({ authors }) => authors);

	useEffect(() => {
		courses.forEach((course) => {
			if (course.id === params.id) {
				setCourse(course);
				setCourseAuthors(getAuthorsNamesById(course.authors, authors));
			}
		});
	}, [authors, courses, params.id]);

	return (
		<>
			{course && (
				<>
					<BackLink to='/courses' text='< Back to courses' />
					<TitleWrapper>
						<Title>{course.title}</Title>
					</TitleWrapper>
					<Info>
						<Description>{course.description}</Description>
						<AdditionalInfo>
							<p>
								<strong>ID: </strong> {course.id}
							</p>
							<p>
								<strong>Duration: </strong> {convertDuration(course.duration)}
							</p>
							<p>
								<strong>Created: </strong> {course.creationDate}
							</p>
							<p>
								<strong>Authors: </strong>
								{courseAuthors && courseAuthors.join(', ')}
							</p>
						</AdditionalInfo>
					</Info>
				</>
			)}
		</>
	);
};
