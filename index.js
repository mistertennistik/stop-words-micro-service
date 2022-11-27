const express = require("express");
const app = express();
const port = process.env.PORT;
const micro_service_name = process.env.MICRO_SERVICE_NAME;

const stopwords = require('stopwords-fr'); // array of stopwords

app.get("/", function (req, res) {
  res.send(stopwords);
});

app.listen(port, function () {
  console.log(`${micro_service_name} listening on port ${port}!`);
});
