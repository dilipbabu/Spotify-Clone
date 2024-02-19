/*
 * @license Apache-2.0
 * @copyright Dilip Babu 2024
 */

"use strict"; // Apply Strict mode to make code more robust, secure, and maintainable.

/*
 * Node Modules
 */

const cors = require("cors");
const cookieParser = require("cookie-parser");

/*
 * Custom Modules
 */

const login = require("./src/routes/login.route");

// Intialize Express App

const express = require("express");
const app = express();

/*
 * EJS Settings
 */

app.set("view engine", "ejs");

/*
 * Setting Static Directory
 */

app.use(express.static(`${__dirname}/public`));

/*
 * Enable Cors & Cookie-Parser
 */

app.use(cors()).use(cookieParser());

/*
 * Login Page
 */

app.use("/login", login);

app.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
