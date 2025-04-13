const express = require("express");
const PORT = require("./config/serverConfig").PORT;

const startAndSetupServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startAndSetupServer();