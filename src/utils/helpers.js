import pathOr from 'ramda.pathor';


const promiseHandler = (promise) => (
	promise
		.then(data => ([ data, null ]))
		.catch(error => {
			const errorMessage = pathOr(pathOr('Error occurred', ['response', 'statusText'], error), ['response', 'data', 'error'], error);
			return [ null, errorMessage ];
		})
);

export default promiseHandler;