const epxress = require("express");
const cors = require("cors");
const app = epxress();
app.use(cors());
app.use(epxress.json());

app.use("/api/v1", require("./src/routes"));

module.exports = app