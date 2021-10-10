import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../Button';

import { Authors } from './AuthorsList.style';
import { Title, Wrapper } from '../CreateCourse.style';

export const AuthorsList = ({ authors, setCourseAuthors, courseAuthors }) => {
	const addCourseAuthor = (authorId) => () => {
		if (!courseAuthors.includes(authorId)) {
			setCourseAuthors([...courseAuthors, authorId]);
		}
	};

	const availableAuthors = authors.filter(
		(author) => !courseAuthors.includes(author.id)
	);

	return (
		<Authors>
			<Title>Authors</Title>
			{availableAuthors.map((author) => {
				return (
					<Wrapper key={author.id}>
						<p>{author.name}</p>
						<Button
							text='Add author'
							handleClick={addCourseAuthor(author.id)}
						/>
					</Wrapper>
				);
			})}
		</Authors>
	);
};

AuthorsList.propTypes = {
	authors: PropTypes.array.isRequired,
	setCourseAuthors: PropTypes.func.isRequired,
	courseAuthors: PropTypes.array.isRequired,
};
