import express from "express";

var router = express.Router();

router.get("/", function (req, res, next) {
  res.send({ message: "OK" });
});

export default router;
