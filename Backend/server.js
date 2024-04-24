const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mainRoutes = require("./routes/main");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URI =
  process.env.MONGO_URL || "mongodb://localhost:27017/employeesDB";

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
app.use("/api/employees", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
