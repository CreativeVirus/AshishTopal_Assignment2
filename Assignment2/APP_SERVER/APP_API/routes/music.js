const express = require('express');
const router = express.Router();
const ctrlMusic = require('../controllers/music');
router
.route('/music')
.get(ctrlFood.getFoods)
.post(ctrlFood.createFood);
router
.route('/music/:musicid')
.get(ctrlFood.getSingleFood)
.put(ctrlFood.updateFood)
.delete(ctrlFood.deleteFood);
module.exports = router;
