import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAuthors } from '../../store/selectors';

import { BackLink } from '../BackLink';

import {
	convertDuration,
	handleError,
	myCustomAxios,
	getAuthorsNamesById,
} from '../../helpers';

import {
	TitleWrapper,
	Title,
	Info,
	Description,
	AdditionalInfo,
} from './CourseInfo.style';

export const CourseInfo = () => {
	const [course, setCourse] = useState(null);
	const authors = useSelector(useAuthors);
	const { courseId } = useParams();

	useEffect(() => {
		myCustomAxios
			.get(`/courses/${courseId}`, { courseId })
			.then(({ data }) => {
				setCourse(data.result);
			})
			.catch((error) => {
				handleError(error);
			});
	}, [courseId]);

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
								{getAuthorsNamesById(course.authors, authors).join(', ')}
							</p>
						</AdditionalInfo>
					</Info>
				</>
			)}
		</>
	);
};
