var express = require('express');
var router = express.Router();

router.get("/resourcesarea", (req, res)=>{
  res.send("resourcesarea")
})

module.exports = router;
