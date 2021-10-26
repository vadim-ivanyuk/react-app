import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { deleteCourse } from '../../store/courses/courses.thunks';
import { useStore } from '../../store/selectors';

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
	const { authors, user } = useSelector(useStore);
	const dispatch = useDispatch();
	const courseAuthors = getAuthorsNamesById(course.authors, authors);
	const courseDuration = convertDuration(course.duration);

	const handleDelete = () => {
		if (window.confirm('Do you really want delete this item ?')) {
			dispatch(deleteCourse(course.id));
		}
	};

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
