require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectionDB } = require("./db/mongo");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
connectionDB();

app.listen(port, () => {
  console.log(`Listening for port ${port}`);
});

app.use("/api", require("./routes"));
