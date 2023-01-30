const express = require('express');
const { getAllDestinationCtlr } = require('../controller/destinationController');


const destinationRouter = express.Router()

// Get all destination
destinationRouter.get('/', getAllDestinationCtlr);


module.exports = destinationRouter;