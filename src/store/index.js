import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { coursesReducer } from './courses/courses.reducer';
import { authorsReducer } from './authors/authors.reducer';

const reducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

export const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
