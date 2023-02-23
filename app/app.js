const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const globalErrorHandler = require('../middlewares/globalErrorHandler');
const notFoundErrorHandler = require('../middlewares/notFoundHandler');
const app = express();

// === Middlewares ===
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Import routes
const destinationRoutes = require('../routes/destinationRoute');
const packageRoutes = require('../routes/packageRoute');
const bookingRoutes = require('../routes/booking');

// Register routes
app.use('/destination', destinationRoutes);
app.use('/package', packageRoutes);
app.use('/booking', bookingRoutes);

// === Error Middlewares ===
app.use(notFoundErrorHandler)
app.use(globalErrorHandler)


module.exports = app;