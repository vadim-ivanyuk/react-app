import axios from 'axios';

import { API_URL } from '../utils/apies';

const session_key = localStorage.getItem('session_key');

axios.defaults.headers.common['Authorization'] = session_key;

export const myCustomAxios = {
	get: (path, data) => {
		return axios.get(`${API_URL}${path}`, data);
	},
	post: (path, data) => {
		return axios.post(`${API_URL}${path}`, data);
	},
	put: (path, data) => {
		return axios.put(`${API_URL}${path}`, data);
	},
	delete: (path, data) => {
		return axios.delete(`${API_URL}${path}`, data);
	},
};
