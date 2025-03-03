const express = require("express");
const { authRouter } = require("./auth.router");

const indexRoute = express.Router();

indexRoute.use("/api/auth", authRouter)


module.exports = indexRoute;