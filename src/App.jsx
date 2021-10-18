import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Registation } from './components/Registration';
import { Courses } from './components/Courses';
import { CourseInfo } from './components/CourseInfo';
import { CourseForm } from './components/CourseForm';
import { Footer } from './components/Footer';

import { Wrapper, Container } from './App.style';

const loggedIn = localStorage.getItem('session_key');

function App() {
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
						<PrivateRoute exact path='/courses/add' component={CourseForm} />
						<Route exact path='/courses/:id' component={CourseInfo} />
						<PrivateRoute
							exact
							path='/courses/update/:id'
							component={CourseForm}
						/>
					</Switch>
				</Container>
			</Wrapper>
			<Footer />
		</Router>
	);
}

export default App;
