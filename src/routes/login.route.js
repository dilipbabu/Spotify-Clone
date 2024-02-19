/*
 * @license Apache-2.0
 * @copyright Dilip Babu 2024
 */

"use strict";

/*
 *Node Modules
 */

const router = require("express").Router();

/*
 * Custom Module
 */

const { login } = require("../controllers/login.controller");

router.get("/", login);

module.exports = router;
