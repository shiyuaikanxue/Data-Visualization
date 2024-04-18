let express = require("express");

let router = express.Router();

const fourData = require("../mock/four.json");
router.get("/data", (req, res) => {
  res.send({ mes: "我是four的路由地址", chartData: fourData });
});

module.exports = router;
