const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/person");

const app = express();
app.use(express.json());
app.use(cors());

// Connexion à MongoDB Atlas
mongoose
  .connect("mongodb+srv://nadaomri:sfaxmanouba@cluster0.iocqb.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error: ", err));

// Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
});

app.listen(5175, () => {
  console.log("Server is running on port 5175");
});
