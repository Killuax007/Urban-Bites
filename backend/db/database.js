const mongoose = require("mongoose");

const connection = () => {
  try {
    mongoose.connect(process.env.DATABASE);
    console.log("connection established");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;
