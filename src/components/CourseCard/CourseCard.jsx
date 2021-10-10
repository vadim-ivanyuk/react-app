import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import { getAuthorsNamesById, convertDuration } from '../../helpers';

import {
	Wrapper,
	MainInfo,
	Title,
	Description,
	AdditionalInfo,
	Authors,
	Duration,
	Created,
	ShowCourse,
} from './CourseCard.style';

export const CourseCard = ({ course, authors }) => {
	const courseAuthors = getAuthorsNamesById(course.authors, authors);
	const courseDuration = convertDuration(course.duration);

	return (
		<Wrapper>
			<MainInfo>
				<Title>{course.title}</Title>
				<Description>{course.description}</Description>
			</MainInfo>
			<AdditionalInfo>
				<Authors>
					<strong>Authors: </strong>
					{courseAuthors.join(', ')}
				</Authors>
				<Duration>
					<strong>Duration: </strong>
					{courseDuration}
				</Duration>
				<Created>
					<strong>Created: </strong>
					{course.creationDate}
				</Created>
				<ShowCourse>
					<Link to={`/courses/${course.id}`}>
						<Button text={'Show course'} />
					</Link>
				</ShowCourse>
			</AdditionalInfo>
		</Wrapper>
	);
};

CourseCard.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
};
