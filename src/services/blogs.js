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

const getAll = async () => {
	const result = await axios.get(baseUrl);
	return result.data;
};

const update = async (id, newObject) => {
	const result = await axios.put(`${baseUrl}/${id}`, newObject);
	return result.data;
};

const create = async (blog) => {
	const config = {
		headers: { Authorization: token },
	};
	const result = await axios.post(baseUrl, blog, config);
	return result.data;
};

export default { setToken, getAll, create, update };