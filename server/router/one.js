let express = require("express");

let router = express.Router();
const oneData = require("../mock/one.json");
router.get("/data", (req, res) => {
  res.send({ mes: "我是one的路由地址", chartData: oneData });
});

module.exports = router;
