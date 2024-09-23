const express = require('express');
const router = express.Router();
const foodController = require("../controllers/foodItemsController")

router.get('/food-items', foodController.getFoodItems);

router.get('/food-items/:id', foodController.getFoodItemById);

module.exports = router;