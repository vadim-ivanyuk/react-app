import React from 'react';
import { useDispatch } from 'react-redux';

import { addAuthor } from '../../../store/authors/authors.thunks';

import { Input } from '../../Input';
import { Button } from '../../Button';

import { useInput } from '../../../hooks';

import { CreateAuthorContainer } from './CreateAuthor.style';
import { Title, InputLabel, Wrapper } from '../CourseForm.style';

export const CreateAuthor = () => {
	const authorName = useInput(true, 2);
	const dispatch = useDispatch();

	const createAuthor = () => {
		const { value, reset } = authorName;

		if (authorName.getError()) {
			const newAuthor = {
				name: value,
			};

			dispatch(addAuthor(newAuthor));

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
