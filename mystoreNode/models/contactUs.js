const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ContactUs = sequelize.define('ContactUs', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 255],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  timestamps: true,
  tableName: 'contactUs',
});

module.exports = ContactUs;
