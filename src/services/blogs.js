import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

const setToken = newToken => {
	if (newToken){
		token = `bearer ${newToken}`;
	} else {
		token = null;
	}
};

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then(response => response.data);
};

export default { getAll, setToken };