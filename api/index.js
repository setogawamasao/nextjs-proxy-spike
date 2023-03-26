const express = require("express");

const app = express();
const PORT = 3001;
const HOST = "localhost";

app.get("/info", (req, res, next) => {
  res.send("info APIが呼ばれました");
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
