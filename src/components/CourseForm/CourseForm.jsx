import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addCourse, updateCourse } from '../../store/courses/courses.thunks';

import { useInput } from '../../hooks';

import { MainInfo } from './MainInfo';
import { CreateAuthor } from './CreateAuthor';
import { AuthorsList } from './AuthorsList';
import { Duration } from './Duration';
import { CourseAuthorsList } from './CourseAuthorsList';
import { BackLink } from '../BackLink';

import { AdditionalInfo, ColumnWrapper } from './CourseForm.style';
import { myCustomAxios } from '../../helpers';

export const CourseForm = ({ match }) => {
	const [courseAuthors, setCourseAuthors] = useState([]);
	const title = useInput(true);
	const description = useInput(true, 2);
	const duration = useInput(true);
	const history = useHistory();
	const dispatch = useDispatch();
	const courseId = match.params.id;

	useEffect(() => {
		if (courseId) {
			myCustomAxios.get(`/courses/${courseId}`).then(({ data }) => {
				const { result } = data;

				title.setValue(result.title);
				description.setValue(result.description);
				duration.setValue(result.duration);
				setCourseAuthors(result.authors);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [courseId]);

	const onSubmit = () => {
		if (
			title.getError() &&
			description.getError() &&
			duration.getError() &&
			courseAuthors.length
		) {
			const course = {
				title: title.value,
				description: description.value,
				duration: duration.value++,
				authors: courseAuthors,
			};

			if (courseId) {
				dispatch(updateCourse(courseId, course, history));
			} else {
				dispatch(addCourse(course, history));
			}
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
				onSubmit={onSubmit}
				courseId={courseId}
			/>
			<AdditionalInfo>
				<ColumnWrapper>
					<CreateAuthor />
					<Duration duration={duration} />
				</ColumnWrapper>
				<ColumnWrapper>
					<AuthorsList
						setCourseAuthors={setCourseAuthors}
						courseAuthors={courseAuthors}
					/>
					<CourseAuthorsList
						setCourseAuthors={setCourseAuthors}
						courseAuthors={courseAuthors}
					/>
				</ColumnWrapper>
			</AdditionalInfo>
		</>
	);
};
