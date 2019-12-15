import axios from 'axios';
import { loadToken } from '../utils/localStorage';

const api = axios.create({
	baseURL: 'https://conduit.productionready.io/api/',
});

const token = loadToken();
if (token) {
	api.defaults.headers.common['Authorization'] = `Token ${token}`;
} else {
	delete api.defaults.headers.common['Authorization']
}

export default api;
