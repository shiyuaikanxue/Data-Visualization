let express = require("express");

let router = express.Router();

const threeData = require("../mock/three.json");
router.get("/data", (req, res) => {
  res.send({ mes: "我是three的路由地址", chartData: threeData });
});


module.exports = router;
