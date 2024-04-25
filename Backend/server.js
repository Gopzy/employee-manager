const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/main");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGO_URL;

// connect mongoDB DB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Express Middleware
app.use(express.json());

// set up route
app.use("/api/employee", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
