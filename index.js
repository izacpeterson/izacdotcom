const express = require("express");
const app = express();
const fs = require("fs");
const util = require("util");

const log_file = fs.createWriteStream(__dirname + "/debug.log", { flags: "a" });
const log_stdout = process.stdout;

console.log = function (d) {
  log_file.write(util.format(d) + "\n");
  log_stdout.write(util.format(d) + "\n");
};

function logger(req, res, next) {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log(`Visitor: ${ip} - ${new Date().toString()} - ${req.url}`);

  next();
}

app.use(logger);

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
