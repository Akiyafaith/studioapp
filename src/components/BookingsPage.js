import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch user-specific bookings
    axios
      .get('http://localhost:3000/api/bookings/bookings', {
        // Include any headers or authentication tokens if needed
      })
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []); // Ensure this effect runs only once on component mount

  return (
    <div className="bookings-page">
      <h1>Your Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {/* Display booking information */}
            <p>Booking Date: {booking.bookingDate}</p>
            <p>Start Time: {booking.startTime}</p>
            <p>End Time: {booking.endTime}</p>
            {/* Add more booking details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingsPage;
