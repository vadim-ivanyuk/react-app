import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../Input';

import { convertDuration } from '../../../helpers';

import { DurationContainer, CourseDuration } from './Duration.style';
import { Title, InputLabel } from '../CourseForm.style';

export const Duration = ({ duration }) => {
	return (
		<DurationContainer>
			<Title>Duration</Title>
			<InputLabel htmlFor='duration'>Duration</InputLabel>
			<Input
				type='number'
				placeholder='Enter duration in minutes...'
				name='duration'
				input={duration}
			/>
			<CourseDuration>
				Duration: {convertDuration(duration.value)}
			</CourseDuration>
		</DurationContainer>
	);
};

Duration.propTypes = {
	duration: PropTypes.shape({
		error: PropTypes.string,
		value: PropTypes.string.isRequired,
		getError: PropTypes.func.isRequired,
		onBlur: PropTypes.func.isRequired,
		onChange: PropTypes.func.isRequired,
		reset: PropTypes.func.isRequired,
		setValue: PropTypes.func.isRequired,
	}),
};
