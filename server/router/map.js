let express = require("express");

let router = express.Router();
const mapData = require("../mock/china-contour.json");
router.get("/data", (req, res) => {
  res.send({ mes: "我是map的路由地址", chartData: mapData });
});

module.exports = router;
