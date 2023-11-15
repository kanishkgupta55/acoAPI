'use strict';
const dayjs = require('dayjs')

const { common_err_msg } = require('../../config');

class ErrorHandler extends Error {
	
	/**
	 * 
	 * @param {number} statusCode 
	 * @param {any} error 
	 * @param {string} message 
	 * @param {string} errorCode 
	 */
	constructor (statusCode, error, message, errorCode) {
		super();
		// console.log(statusCode, message, error);
		this.statusCode = statusCode || 500;
		this.message = message || common_err_msg;
		this.errorCode = errorCode || undefined;
		this.error = error;
		this.error_message = (error && error.message) ? error.message : undefined;
	};   
}

const handleError = (err, res) => {
	let { statusCode, message, error, errorCode } = err;
	console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"), '::', err);    

	statusCode = statusCode || 500;
	message = message || common_err_msg;
	const error_message = error?.message ? error?.message : undefined;

	return res.status(statusCode).json({
		success: false,
		message,
		code: errorCode,
		error,
		error_message,
		timeStamp: dayjs().format("YYYY-MM-DD HH:mm:ss")
	});
};

module.exports = {
	ErrorHandler,
	handleError
};