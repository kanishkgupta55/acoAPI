"use strict";

const express = require("express");
const router	= express.Router();

const { mainCtrl } = require("../controllers");


router.get('/', (req, res) => {
  res.send('Hello World!');
});


// MAIN
router.put("/user/activate/:key/:ip", mainCtrl.activateUser);
router.get("/user/verify/ip/:ip/:key", mainCtrl.verifyUser);
router.put("/user/add/blacklist", mainCtrl.addBlacklist);
router.get("/user/get/blacklist/:key", mainCtrl.fetchBlacklist);
router.put("/user/remove/blacklist", mainCtrl.removeBlacklist);
router.get("/user/hashes/read", mainCtrl.readHashes);



module.exports = router;