const FoodItem = require("../models/FoodItem")

const getFoodItems = async (req, res) => {
    try {

        const foodItems = await FoodItem.findAll();
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching food items" });
        console.log("Error fetching food items")
    }
}

const getFoodItemById = async (req, res) => {
    try {
        const id = req.params.id;
        const foodItem = await FoodItem.findByPk(id);
        if (!foodItem) {
            return res.status(404).json({ error: 'Food item not found' });
        }
        res.status(200).json(foodItem);
    } catch (error) {
        res.status(500).json({ message: "Error fetching food item" });
        console.log("Error fetching food item")

    }
}

module.exports = {
    getFoodItems,
    getFoodItemById
  };
  
