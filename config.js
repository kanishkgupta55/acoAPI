const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	port						: process.env.PORT || 8000,
	common_err_msg	: 'Something went wrong. Please try again later.',
	try_again_msg 	: 'Please try again later.',
	missing_fields	: 'Missing required fields',
	API_KEY					: 'EUns29jS',
};
