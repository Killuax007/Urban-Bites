const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./db/database");

const mainRouter = require("./routes/index");
try {
  database();
} catch (error) {
  console.log(error);
}
app.use(cors());
app.use(bodyParser.json());
app.use("/", mainRouter);

app.listen(port, () => {
  console.log("listening on port : " + port);
});
