const express = require("express");
const userRouter = require("./users");
const foodRouter = require("./foods");
const router = express.Router();

router.use("/user", userRouter);
router.use("/", foodRouter);
module.exports = router;
