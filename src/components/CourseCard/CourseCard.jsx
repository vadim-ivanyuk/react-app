import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { deleteCourse } from '../../store/courses/courses.thunks';

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
	Buttons,
} from './CourseCard.style';

export const CourseCard = ({ course }) => {
	const { authors, user } = useSelector((store) => store);
	const dispatch = useDispatch();
	const courseAuthors = getAuthorsNamesById(course.authors, authors);
	const courseDuration = convertDuration(course.duration);

	const handleDelete = () => {
		if (window.confirm('Do you really want delete this item ?')) {
			dispatch(deleteCourse(course.id));
		}
	};

	return (
		<Wrapper data-testid='courseCard'>
			<MainInfo>
				<Title data-testid='title'>{course.title}</Title>
				<Description data-testid='description'>
					{course.description}
				</Description>
			</MainInfo>
			<AdditionalInfo>
				<Authors data-testid='authors'>
					Authors: {courseAuthors.join(', ')}
				</Authors>
				<Duration data-testid='duration'>Duration: {courseDuration}</Duration>
				<Created data-testid='created'>Created: {course.creationDate}</Created>
				<Buttons>
					<Link to={`/courses/${course.id}`}>
						<Button text={'Show course'} />
					</Link>
					{user.role === 'admin' && (
						<>
							<Link to={`/courses/update/${course.id}`}>
								<Button text='Update' />
							</Link>
							<Button text='Delete' handleClick={handleDelete} />
						</>
					)}
				</Buttons>
			</AdditionalInfo>
		</Wrapper>
	);
};

CourseCard.propTypes = {
	course: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		creationDate: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		authors: PropTypes.array.isRequired,
	}),
};
