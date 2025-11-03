const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ message: `Hello from AWS Backend (${process.env.HOSTNAME || "Instance"})` });
});

module.exports = router;
