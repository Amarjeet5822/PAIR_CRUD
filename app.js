const express = require("express");
const morgan = require("morgan");
const errorHandle = require("./errorHandle");
const { dbConnection } = require("./dbConfig");
const indexRoute = require("./routes/index.route");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(morgan("tiny")) // method :url :status :res[content-length] - :response-time ms => check terminal

// ! router
app.get("/", (req, res)=>{
  res.send("you are at home page")
})

// All route handle through index.routes.js
app.use(indexRoute);

app.use(errorHandle)


const PORT = process.env.PORT;
app.listen(PORT, () => {
  dbConnection();
  console.log(`running at http://localhost:${PORT}`)
})