const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL

const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("db connected")
  } catch (error) {
    console.log("error in db connection")
  }
} 

module.exports = { dbConnection };