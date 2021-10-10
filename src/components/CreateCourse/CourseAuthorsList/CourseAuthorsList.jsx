import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../Button';
import { getAuthorsNamesById } from '../../../helpers';

import { CourseAuthors, Error } from './CourseAuthorsList.style';
import { Title, Wrapper } from '../CreateCourse.style';

export const CourseAuthorsList = ({
	courseAuthors,
	setCourseAuthors,
	authors,
}) => {
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
	courseAuthors: PropTypes.array.isRequired,
	setCourseAuthors: PropTypes.func.isRequired,
	authors: PropTypes.array.isRequired,
};
