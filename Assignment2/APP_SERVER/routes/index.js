var express = require('express');
var router = express.Router();
const ctrlMain = require('../controller/about');
const ctrlMusic = require('../controller/music');

/* GET home page. */
router.get('/', ctrlMain.about);
router.get('/list', ctrlMusic.musicDisplay);
router.get('/about', ctrlMain.about);
router.get('/display', ctrlMusic.musiclist);
module.exports = router;
