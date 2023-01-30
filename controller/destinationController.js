const AsyncHandler = require('express-async-handler');
const Destination = require('../model/Destination');

// @desc Get All Destination
// @route GET /destination/
// @access private

exports.getAllDestinationCtlr = AsyncHandler(async (req, res) => {
  const destinations = await Destination.find()

  res.status(200).json({
    status: "Success",
    data: destinations,
    message: "Get Destination successfully!"
  })
})