const express = require("express");

const app = express();

const chartOne = require("./router/one");
const chartTwo = require("./router/two");
const chartThree = require("./router/three");
const chartFour = require("./router/four");
const chartMap = require("./router/map");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length,Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET,DELETE,OPTIONS");
  // 千万不要网%%￥￥￥###
  // 千万不要网
  // 千万不要网
  next();
});
app.use("/one", chartOne);
app.use("/two", chartTwo);
app.use("/three", chartThree);
app.use("/four", chartFour);
app.use("/map", chartMap);

app.listen(8888);
