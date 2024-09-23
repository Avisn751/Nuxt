'use strict';

const { v4: uuidv4 } = require('uuid');

const currentTimestamp = new Date();

const foodItems = [
  {
    unique_product_id: uuidv4(),
    name: "Spaghetti Carbonara",
    image: "https://thesecretsuppersociety.com/wp-content/uploads/2022/03/spagetti-carbonara.jpg",
    description: "Creamy Italian pasta with pancetta, eggs, and Parmesan cheese.",
    price: 12.99,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Caesar Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyhI6xGGvji2gkyyxJ5MchAQpxNS_T1we8Q&s",
    description: "Crisp romaine lettuce with Caesar dressing, Parmesan, and croutons.",
    price: 8.99,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Beef Wellington",
    image: "https://cdn.prod.website-files.com/657a7aac36df076237527e36/658e021c326525fa7f055abd_6584a6d965e3b46120d96d3d_beefwellington_youtube_v2_1.webp",
    description: "Tender beef fillet wrapped in puff pastry and served with a rich mushroom sauce.",
    price: 22.99,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "French Onion Soup",
    image: "https://assets.epicurious.com/photos/54e604564f77a310045d6212/master/pass/51248680_french-onion-soup-2_6x4-hpr.jpg",
    description: "Classic French soup made with caramelized onions, beef broth, and melted cheese.",
    price: 6.99,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Grilled Salmon",
    image: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg",
    description: "Perfectly grilled salmon fillet served with a side of fresh vegetables.",
    price: 15.99,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Butter Chicken",
    image: "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682-1.jpg",
    description: "Rich and creamy chicken curry made with tomatoes, butter, and Indian spices.",
    price: 10.99,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Paneer Tikka",
    image: "https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2024/1/3/paneer-tikka.jpg",
    description: "Grilled cubes of marinated paneer served with a tangy mint chutney.",
    price: 9.49,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Biryani",
    image: "https://www.maggiarabia.com/sites/default/files/srh_recipes/30c29da8aec1403f42e82552d927abab.png",
    description: "Aromatic rice dish cooked with tender pieces of chicken or mutton and Indian spices.",
    price: 12.49,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Masala Dosa",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
    description: "Crispy rice crepes stuffed with spiced potato filling, served with chutneys.",
    price: 7.99,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  },
  {
    unique_product_id: uuidv4(),
    name: "Chole Bhature",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/1200px-Chole_Bhature_At_Local_Street.jpg",
    description: "A hearty dish of spiced chickpea curry served with fluffy deep-fried bread.",
    price: 8.49,
    createdAt: currentTimestamp,
    updatedAt: currentTimestamp
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('fooditems', foodItems, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('fooditems', null, {});
  }
};
