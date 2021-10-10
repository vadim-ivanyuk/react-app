import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { Input } from '../../Input';
import { Button } from '../../Button';

import { useInput } from '../../../hooks';

import { CreateAuthorContainer } from './CreateAuthor.style';
import { Title, InputLabel, Wrapper } from '../CreateCourse.style';

export const CreateAuthor = ({ setAuthors, authors }) => {
	const authorName = useInput(true, 2);

	const createAuthor = () => {
		let { value, reset } = authorName;

		if (authorName.getError()) {
			setAuthors(
				authors.concat({
					id: uuidv4(),
					name: value,
				})
			);

			reset();
		}
	};

	return (
		<CreateAuthorContainer>
			<Title>Add author</Title>
			<InputLabel htmlFor='authorName'>Author name</InputLabel>
			<Input
				type='text'
				placeholder='Enter author name'
				name='authorName'
				input={authorName}
			/>
			<Wrapper center>
				<Button text='Create Author' handleClick={createAuthor} />
			</Wrapper>
		</CreateAuthorContainer>
	);
};

CreateAuthor.propTypes = {
	setAuthors: PropTypes.func.isRequired,
	authors: PropTypes.array.isRequired,
};
