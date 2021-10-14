import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button } from '../Button';
import { Input } from '../Input';

import { useInput } from '../../hooks';

import { Wrapper, Search } from './Navbar.style';

export const Navbar = ({ setSearchQueries }) => {
	const role = useSelector(({ user }) => user.role);
	const searchInput = useInput();
	const { value } = searchInput;

	useEffect(() => {
		if (!value) {
			setSearchQueries(value);
		}
	}, [value, setSearchQueries]);

	const search = (e) => {
		e.preventDefault();

		setSearchQueries(value);
	};

	return (
		<Wrapper>
			<Search onSubmit={search}>
				<Input
					type='text'
					placeholder='Enter course name...'
					name='search'
					input={searchInput}
				/>
				<Button text='Search' handleClick={search} />
			</Search>
			<Link to='/courses/add'>
				{role === 'admin' && <Button text='Add new course' />}
			</Link>
		</Wrapper>
	);
};

Navbar.propTypes = {
	setSearchQueries: PropTypes.func.isRequired,
};
