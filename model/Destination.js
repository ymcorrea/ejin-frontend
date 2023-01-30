const mongoose = require("mongoose");

const { Schema } = mongoose;

const destinationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
  { collection: 'destination' }
);

const Destination = mongoose.model("destination", destinationSchema);

module.exports = Destination;