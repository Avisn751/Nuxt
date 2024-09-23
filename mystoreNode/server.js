const express = require('express');
const { FoodItem } = require('./models/FoodItem');
const app = express();
const PORT = 8080;
const cors = require('cors');
const databse = require("./db")
const foodRoutes = require("./routes/foodItemsRoute")
const ContactUsRoute = require("./routes/contactUsRoute")
const userRoutes = require("./routes/userRoutes")
require('dotenv').config()



// Handle unhandled rejections globally
process.on("unhandledRejection", (error) => {
  console.error("unhandledRejection", error.message);
});

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origin:", origin);
    if (!origin || process.env.ALLOW_SITE_URL.includes("*")) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

app.use('/api', foodRoutes);
app.use('/api', ContactUsRoute)
app.use('/api', userRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
