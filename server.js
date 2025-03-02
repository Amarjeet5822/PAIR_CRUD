const express = require("express");
const dotenv = require("dotenv");
const errorHandle = require("./errorHandle");
dotenv.config();

const app = express();
app.use(express.json());



// ! router
app.get("/", (req, res)=>{
  res.send("you are at home page")
})

app.use("/api/auth", userRoute)


app.use(errorHandle)
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`)
})