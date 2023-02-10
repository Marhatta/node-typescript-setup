import express from 'express';
const app = express();
const { logger, httpLogger } = require('./logger');
const port = 5000;
const logErrors = require('./middleware/logErrors');
const errorHandler = require('./middleware/errorHandler');

// https logger for api requests
app.use(httpLogger);

// All routes
const routes = require('./routes');
app.use('/', routes);

// middleware for logging and handling errors
app.use(logErrors);
app.use(errorHandler);

// Starting the server
app.listen(port, () => logger.info(`Running on port ${port}`));
