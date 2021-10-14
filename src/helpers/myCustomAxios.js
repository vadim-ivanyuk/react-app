import axios from 'axios';

import { API_URL } from '../utils/apies';

const session_key = localStorage.getItem('session_key');

export const myCustomAxios = {
	get: (path, data) => {
		return axios.get(`${API_URL}${path}`, {
			headers: {
				Authorization: session_key,
			},
			data,
		});
	},
	post: (path, data) => {
		return axios.post(`${API_URL}${path}`, data, {
			headers: {
				Authorization: session_key,
			},
		});
	},
	put: (path, data) => {
		return axios.put(`${API_URL}${path}`, data, {
			headers: {
				Authorization: session_key,
			},
		});
	},
	delete: (path, data) => {
		return axios.delete(`${API_URL}${path}`, {
			headers: {
				Authorization: session_key,
			},
			data,
		});
	},
};
