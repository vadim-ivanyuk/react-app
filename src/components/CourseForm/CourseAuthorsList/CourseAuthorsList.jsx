import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from '../../Button';
import { getAuthorsNamesById } from '../../../helpers';

import { CourseAuthors, Error } from './CourseAuthorsList.style';
import { Title, Wrapper } from '../CourseForm.style';

export const CourseAuthorsList = ({ setCourseAuthors, courseAuthors }) => {
	const authors = useSelector(({ authors }) => authors);

	const deleteCourseAuthor = (authorId) => () => {
		setCourseAuthors(() =>
			courseAuthors.filter((author) => author !== authorId)
		);
	};

	return (
		<CourseAuthors>
			<Title>Course authors</Title>
			{courseAuthors.length ? (
				courseAuthors.map((authorId) => (
					<Wrapper key={authorId}>
						<p>{getAuthorsNamesById(authorId, authors)}</p>
						<Button
							text='Delete author'
							handleClick={deleteCourseAuthor(authorId)}
						/>
					</Wrapper>
				))
			) : (
				<Error>Author list is empty</Error>
			)}
		</CourseAuthors>
	);
};

CourseAuthorsList.propTypes = {
	setCourseAuthors: PropTypes.func.isRequired,
	courseAuthors: PropTypes.array.isRequired,
};
