import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setCourses } from './store/courses/courses.actions';
import { setAuthors } from './store/authors/authors.actions';

import { Header } from './components/Header';
import { Login } from './components/Login';
import { Registation } from './components/Registration';
import { Courses } from './components/Courses';
import { CourseInfo } from './components/CourseInfo';
import { CreateCourse } from './components/CreateCourse';
import { Footer } from './components/Footer';

import { API_URL } from './utils/apies';

import { Wrapper, Container } from './App.style';

const loggedIn = localStorage.getItem('session_key');

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.all([
				axios.get(`${API_URL}/courses/all`),
				axios.get(`${API_URL}/authors/all`),
			])
			.then((data) => {
				dispatch(setCourses(data[0].data.result));
				dispatch(setAuthors(data[1].data.result));
			})
			.catch((error) => {
				alert(error.response.data.errors || error.response.data.result);
			});
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<Wrapper>
				<Container>
					<Switch>
						<Route exact path='/'>
							{loggedIn ? <Redirect to='/courses' /> : <Redirect to='/login' />}
						</Route>
						<Route exact path='/login' component={Login} />
						<Route exact path='/registration' component={Registation} />
						<Route exact path='/courses' component={Courses} />
						<Route exact path='/courses/add' component={CreateCourse} />
						<Route exact path='/courses/:id' component={CourseInfo} />
					</Switch>
				</Container>
			</Wrapper>
			<Footer />
		</Router>
	);
}

export default App;
