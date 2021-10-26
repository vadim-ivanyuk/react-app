import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router';

import { getAuthors } from '../../store/authors/authors.thunks';
import { useUser } from '../../store/selectors';

export const PrivateRoute = ({ component: Component, ...rest }) => {
	const { role } = useSelector(useUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAuthors());
	}, [dispatch]);

	return (
		<Route
			{...rest}
			render={(props) =>
				role === 'admin' ? <Component {...props} /> : <Redirect to='/courses' />
			}
		/>
	);
};
