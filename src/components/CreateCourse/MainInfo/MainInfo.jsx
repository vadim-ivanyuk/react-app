import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../Input';
import { Button } from '../../Button';

import { MainInfoContainer, Textarea, Error } from './MainInfo.style';
import { Wrapper, InputLabel } from '../CreateCourse.style';

export const MainInfo = ({ title, description, createCourse }) => {
	return (
		<MainInfoContainer>
			<Wrapper>
				<div>
					<InputLabel htmlFor='title'>Title</InputLabel>
					<Input
						type='text'
						placeholder='Enter title'
						name='title'
						input={title}
					/>
				</div>
				<Button text='Create course' handleClick={createCourse} />
			</Wrapper>
			<InputLabel htmlFor='description'>Description</InputLabel>
			<Textarea
				id='description'
				name='description'
				placeholder='Enter description'
				{...description}
			/>
			{description.error && <Error>{description.error}</Error>}
		</MainInfoContainer>
	);
};

MainInfo.propTypes = {
	title: PropTypes.object.isRequired,
	description: PropTypes.object.isRequired,
	createCourse: PropTypes.func.isRequired,
};
