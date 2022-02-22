// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const carsRoute = require("./controller/carController")
const artistsRoute = require("./controller/artsitController")
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Cars
app.use("/cars", carsRoute)
app.use("/artists", artistsRoute )

// EXPORT
module.exports = app;
