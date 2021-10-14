import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({ component: Component, ...rest }) => {
	const role = useSelector(({ user }) => user.role);

	return (
		<Route
			{...rest}
			render={(props) =>
				role === 'admin' ? <Component {...props} /> : <Redirect to='/courses' />
			}
		/>
	);
};
