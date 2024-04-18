let express = require("express");

let router = express.Router();

const twoData = require("../mock/two.json");
router.get("/data", (req, res) => {
  res.send({ mes: "我是two的路由地址", chartData: twoData });
});

module.exports = router;
