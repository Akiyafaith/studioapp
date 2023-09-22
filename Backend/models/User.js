// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); // Import your Sequelize instance
//const sequelize = require('../config')

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more fields as needed
});

module.exports = User;
