import axios from 'axios';

export const malongAPI = axios.create({
	baseURL: 'https://cdn.malonghack.com'
});
