const express = require("express");

const  { sortParagraph }  = require("../controllers/common");

const router = express.Router();

router.post("/sortParagraph", sortParagraph);

module.exports = router;
