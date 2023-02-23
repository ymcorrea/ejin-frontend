const express = require('express');
const router = express.Router();
const { getAllDestinationCtlr } = require('../controller/destinationController');

// Get all Place Collection API
router.get('/', getAllDestinationCtlr);

module.exports = router;