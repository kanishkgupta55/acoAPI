"use strict";

const express = require('express');
const helmet = require("helmet");

const { port } = require('./config');
const corsMiddleware = require('./src/middlewares/cors');
const {
  responseHandler,
	errorHandler: { handleError }
} = require('./src/helpers');

const { routes } = require('./src/routes');

const app = express();

function main() {
	app.use(helmet());

	app.use(express.json({ limit: '400mb' }));
	app.use(express.urlencoded({ limit: '400mb', extended: false }));

	app.use(corsMiddleware.corsEnable);

	
	// Apply the response handler middleware to all routes
	app.use(responseHandler);

	app.use('/', routes); // routing file


	app.use((err, req, res, next) => { // Always use the end of other middlewares and routes for it to function correctly
		handleError(err, res);
	});
	app.listen(port, () => {
		console.log('API server started on: ' + port);
	});
};

main();