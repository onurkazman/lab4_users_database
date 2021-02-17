const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/UserRoutes.js");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb://onurkazman:647914Canada@cluster0-shard-00-00.njf6q.mongodb.net:27017,cluster0-shard-00-01.njf6q.mongodb.net:27017,cluster0-shard-00-02.njf6q.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-6tgwxq-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(usersRouter);

app.listen(8081, () => {
  console.log("Server is running...");
});
