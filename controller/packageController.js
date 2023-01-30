const AsyncHandler = require('express-async-handler');
const Packages = require('../model/Packages');

// @desc Get All Packages
// @route GET /package/
// @access public

exports.getAllPackageCtlr = AsyncHandler(async (req, res) => {
  const packages = await Packages.find()

  res.status(200).json({
    status: "Success",
    data: packages,
    message: "Get Packages successfully!"
  })
})

// @desc Get Single Package
// @route GET /package/:id
// @access private
exports.getSinglePackageCtlr = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const package = await Packages.findById(id).select(
    ' -createdAt -updatedAt -__v'
  );
  if (!package) {
    throw new Error("Package not found by this ID!")
  } {
    res.status(200).json({
      status: "Success",
      package: package
    })
  }
})

// @desc Create new Package
// @route POST /package/:id
// @access private
exports.createPackageCtlr = AsyncHandler(async (req, res) => {
  const package = req.body;
  const newPackage = await Admin.create(package);

  return res.status(201).json({
    status: 'success',
    data: newPackage,
    message: "Package created successfully"
  })
})