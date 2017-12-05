var express = require('express');
var router = express.Router();

router.get("/datadetails", (req, res)=>{
  res.send("datadetails")
})

module.exports = router;
