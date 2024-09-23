'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const { v4: uuidv4 } = require('uuid');

const FoodItem = sequelize.define('FoodItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  unique_product_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => uuidv4()
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  tableName: 'fooditems',
  timestamps: true,
});

module.exports = FoodItem;
