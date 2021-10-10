import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import axios from 'axios';

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
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		axios
			.all([
				axios.get(`${API_URL}/courses/all`),
				axios.get(`${API_URL}/authors/all`),
			])
			.then((data) => {
				setCourses(data[0].data.result);
				setAuthors(data[1].data.result);
			});
	}, []);

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
						<Route
							exact
							path='/courses'
							component={() => <Courses courses={courses} authors={authors} />}
						/>
						<Route
							exact
							path='/courses/add'
							component={() => (
								<CreateCourse
									courses={courses}
									setCourses={setCourses}
									authors={authors}
									setAuthors={setAuthors}
								/>
							)}
						/>
						<Route
							exact
							path='/courses/:id'
							component={() => (
								<CourseInfo courses={courses} authors={authors} />
							)}
						/>
					</Switch>
				</Container>
			</Wrapper>
			<Footer />
		</Router>
	);
}

export default App;
