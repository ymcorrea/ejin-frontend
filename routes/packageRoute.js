const express = require('express');
const { getAllPackageCtlr, getSinglePackageCtlr, createPackageCtlr } = require('../controller/packageController');


const packageRouter = express.Router()

// Admin Register
packageRouter.get('/', getAllPackageCtlr)

packageRouter.get('/:id/', getSinglePackageCtlr)

packageRouter.post('/', createPackageCtlr)


module.exports = packageRouter;