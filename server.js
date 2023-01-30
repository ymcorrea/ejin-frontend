require('dotenv').config();
require("./config/dbConnect");
const http = require('http');
const app = require('./app/app');
const PORT = process.env.PORT || 5000;

// Create the server
const server = http.createServer(app);

// Run the server
server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT)
});