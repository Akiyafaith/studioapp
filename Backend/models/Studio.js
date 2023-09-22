const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Studio = sequelize.define('studios', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  cost: {
    type: DataTypes.STRING,
    allowNull: false,
  // Add more fields as needed
}, 
location: {
  type: DataTypes.STRING, // Use the appropriate data type for locations
},
});

module.exports = Studio;
