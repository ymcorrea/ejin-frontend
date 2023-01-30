const express = require('express');
const morgan = require('morgan');
const globalErrorHandler = require('../middlewares/globalErrorHandler');
const notFoundErrorHandler = require('../middlewares/notFoundHandler');
const destinationRouter = require('../routes/destinationRoute');
const packageRouter = require('../routes/packageRoute');
const app = express();

// === Middlewares ===
app.use(morgan('dev'));
app.use(express.json());

// === Routes ===
app.use('/destination/', destinationRouter)

app.use('/packages/', packageRouter)

// === Error Middlewares ===
app.use(notFoundErrorHandler)
app.use(globalErrorHandler)


module.exports = app;