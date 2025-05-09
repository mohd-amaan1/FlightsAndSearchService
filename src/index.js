const express = require("express");
const {PORT} = require("./config/serverConfig");
const bodyParser = require("body-parser");

const startAndSetupServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startAndSetupServer();