const express = require("express");
const dotenv = require("dotenv");
const errorHandle = require("./errorHandle");
const { dbConnection } = require("./dbConfig");
const { authRouter } = require("./routes/auth.router");
dotenv.config();

const app = express();
app.use(express.json());



// ! router
app.get("/", (req, res)=>{
  res.send("you are at home page")
})

app.use("/api/auth", authRouter)


app.use(errorHandle)


const PORT = process.env.PORT;
app.listen(PORT, () => {
  dbConnection();
  console.log(`running at http://localhost:${PORT}`)
})