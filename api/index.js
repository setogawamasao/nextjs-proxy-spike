const express = require("express");

const app = express();
const PORT = 3001;
const HOST = "localhost";

app.get("/api/v1/test", (req, res, next) => {
  console.log("バックエンドのAPIが呼ばれました");
  res.send("バックエンドのAPIが呼ばれました");
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
