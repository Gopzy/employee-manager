const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = process.env.DB_NAME || "employeesDB";

// connect mongoDB
MongoClient.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db(DB_NAME);
    const employeesCollection = db.collection("employees");

    // Read all employees
    app.get("/api/employees", async (req, res) => {
      const employees = await employeesCollection.find({}).toArray();
      res.json(employees);
    });

    // Delete employee
    app.delete("/api/employees/:id", async (req, res) => {
      console.log("Delete employee :::::::::::::::::::", req, res);
      try {
        const { id } = req.params;
        await employeesCollection.deleteOne({ _id: ObjectId(id) });
        res.status(200).send();
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })

  .catch((error) => console.error("Error connecting to MongoDB:", error));
