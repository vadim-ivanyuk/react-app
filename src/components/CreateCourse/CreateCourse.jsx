import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { useInput } from '../../hooks';

import { MainInfo } from './MainInfo';
import { CreateAuthor } from './CreateAuthor';
import { AuthorsList } from './AuthorsList';
import { Duration } from './Duration';
import { CourseAuthorsList } from './CourseAuthorsList';
import { BackLink } from '../BackLink';

import { AdditionalInfo, ColumnWrapper } from './CreateCourse.style';

export const CreateCourse = ({ authors, setAuthors, courses, setCourses }) => {
	const [courseAuthors, setCourseAuthors] = useState([]);
	const title = useInput(true);
	const description = useInput(true, 2);
	const duration = useInput(true);
	const history = useHistory();

	const createCourse = () => {
		if (
			title.getError() &&
			description.getError() &&
			duration.getError() &&
			courseAuthors.length
		) {
			setCourses([
				...courses,
				{
					id: uuidv4(),
					title: title.value,
					description: description.value,
					creationDate: dayjs().format('DD/MM/YYYY'),
					duration: duration.value,
					authors: courseAuthors,
				},
			]);

			history.push('/courses');
		} else {
			title.getError();
			description.getError();
			duration.getError();
			alert('Please, fill in all fields');
		}
	};

	return (
		<>
			<BackLink to='/courses' text='< Back to courses' />
			<MainInfo
				title={title}
				description={description}
				createCourse={createCourse}
			/>
			<AdditionalInfo>
				<ColumnWrapper>
					<CreateAuthor setAuthors={setAuthors} authors={authors} />
					<Duration duration={duration} />
				</ColumnWrapper>
				<ColumnWrapper>
					<AuthorsList
						authors={authors}
						setCourseAuthors={setCourseAuthors}
						courseAuthors={courseAuthors}
					/>
					<CourseAuthorsList
						courseAuthors={courseAuthors}
						setCourseAuthors={setCourseAuthors}
						authors={authors}
					/>
				</ColumnWrapper>
			</AdditionalInfo>
		</>
	);
};

CreateCourse.propTypes = {
	authors: PropTypes.array.isRequired,
	setAuthors: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired,
	setCourses: PropTypes.func.isRequired,
};
