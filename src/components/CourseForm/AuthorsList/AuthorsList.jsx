import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { deleteAuthor } from '../../../store/authors/authors.thunks';

import { Button } from '../../Button';

import { Authors } from './AuthorsList.style';
import { Title, Wrapper } from '../CourseForm.style';

export const AuthorsList = ({ setCourseAuthors, courseAuthors }) => {
	const authors = useSelector(({ authors }) => authors);
	const dispatch = useDispatch();

	const addCourseAuthor = (authorId) => () => {
		if (!courseAuthors.includes(authorId)) {
			setCourseAuthors([...courseAuthors, authorId]);
		}
	};

	const handleDeleteAuthor = (authorId) => () => {
		if (window.confirm('Do you really want delete this item ?')) {
			dispatch(deleteAuthor(authorId));
		}
	};

	const availableAuthors = authors.filter(
		(author) => !courseAuthors.includes(author.id)
	);

	return (
		<Authors data-testid='authorsList'>
			<Title>Authors</Title>
			{availableAuthors.map((author) => {
				return (
					<Wrapper data-testid='author' key={author.id}>
						<p>{author.name}</p>
						<div>
							<Button
								text='Add author'
								handleClick={addCourseAuthor(author.id)}
							/>{' '}
							<Button
								text='Delete author'
								handleClick={handleDeleteAuthor(author.id)}
							/>
						</div>
					</Wrapper>
				);
			})}
		</Authors>
	);
};

AuthorsList.propTypes = {
	setCourseAuthors: PropTypes.func.isRequired,
	courseAuthors: PropTypes.array.isRequired,
};
