import axios from 'axios';
import { loadToken } from '../utils/localStorage';

export const api = axios.create({
	baseURL: 'https://conduit.productionready.io/api/',
});

export const setHeader = () => {
	const token = loadToken();
	if (token) {
		api.defaults.headers.common['Authorization'] = `Token ${token}`;
	} else {
		delete api.defaults.headers.common['Authorization'];
	}
};
