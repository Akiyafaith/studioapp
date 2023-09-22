const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Booking = sequelize.define('booking', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  studioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.STRING, // or another appropriate data type for time
    allowNull: false,
  },
  endTime: {
    type: DataTypes.STRING, // or another appropriate data type for time
    allowNull: false,
  },
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Add more fields as needed
});

module.exports = Booking;
