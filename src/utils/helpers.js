const promiseHandler = (promise) => (
	promise
		.then(data => ([ data, null ]))
		.catch(error => ([ null, error ]))
);

export default promiseHandler;