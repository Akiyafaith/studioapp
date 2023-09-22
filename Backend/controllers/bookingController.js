const Booking = require('../models/Booking');
//const { isAuthenticated } = require('../middleware/auth');

// Controller functions for bookings
// Modify getAllBookings to filter by user ID
exports.getAllBookings = async (req, res) => {
  try {
    const userId = req.userId; // Assuming you have a user object in the request
    const userBookings = await Booking.findAll({ where: { userId } });
    res.json(userBookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


exports.getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.createBooking = async (req, res) => {
    try {
      const { studioId, bookingDate, startTime, endTime } = req.body;
      const userId = req.user.userId
      console.log('Booking Data:', {
        userId,
        studioId,
        bookingDate,
        startTime,
        endTime,
      });
      // Validate input data here, e.g., check if the studio is available for the specified date and time
  
      // Create a new booking record
      const booking = await Booking.create({
        userId,
        studioId,
        bookingDate,
        startTime,
        endTime,
      });
  
      return res.status(201).json(booking);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

  exports.updateBooking = async (req, res) => {
    try {
      const { bookingId } = req.params; // Assuming you have a route parameter for the booking ID
      const { bookingDate, startTime, endTime } = req.body;
  
      // Check if the booking with the given ID exists
      const booking = await Booking.findByPk(bookingId);
  
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
  
      // Update the booking's information
      booking.bookingDate = bookingDate;
      booking.startTime = startTime;
      booking.endTime = endTime;
  
      // Save the updated booking to the database
      await booking.save();
  
      return res.status(200).json(booking);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

exports.deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    await booking.destroy();
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
