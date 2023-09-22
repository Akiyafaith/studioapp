import React, { useState } from 'react';
import './StudioList.css';
import axios from 'axios';

function StudiosList({ studios }) {
  // Add state variables to track user selections
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedStartTimes, setSelectedStartTimes] = useState({});
  const [selectedEndTimes, setSelectedEndTimes] = useState({});

  // Update the state when the date or time input changes
  const handleDateChange = (studioId, event) => {
    setSelectedDates((prevSelectedDates) => ({
      ...prevSelectedDates,
      [studioId]: event.target.value,
    }));
  };

  const handleStartTimeChange = (studioId, event) => {
    setSelectedStartTimes((prevSelectedStartTimes) => ({
      ...prevSelectedStartTimes,
      [studioId]: event.target.value,
    }));
  };

  const handleEndTimeChange = (studioId, event) => {
    setSelectedEndTimes((prevSelectedEndTimes) => ({
      ...prevSelectedEndTimes,
      [studioId]: event.target.value,
    }));
  };

  const handleBooking = (studioId) => {
    const selectedDate = selectedDates[studioId];
    const selectedStartTime = selectedStartTimes[studioId];
    const selectedEndTime = selectedEndTimes[studioId];

    if (!selectedDate || !selectedStartTime || !selectedEndTime) {
      // Ensure the user has selected date, start time, and end time
      alert('Please select date, start time, and end time before booking.');
      return;
    }

    const bookingData = {
      userId: 8/* Get the user ID from your authentication */,
      studioId: studioId,
      bookingDate: selectedDate,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
    };

    // Send a POST request to create the booking
    axios
      .post('http://localhost:3000/api/bookings/bookings', bookingData)
      .then((response) => {
        // Handle the response here (e.g., show a success message)
        console.log('Booking created:', response.data);
      })
      .catch((error) => {
        // Handle errors (e.g., show an error message)
        console.error('Error creating booking:', error);
      });
  };

  return (
    <div className="studios-list">
      {studios.map((studio) => (
        <div key={studio.id} className="studio-card">
          <div className="studio-info">
            <h2>{studio.name}</h2>
            <p>Location: {studio.location}</p> {/* Display the location */}
            <p>Cost: Ksh {studio.cost}</p>
            <div className="time-selection">
              <label>Select Date:</label>
              <input
                type="date"
                value={selectedDates[studio.id] || ''}
                onChange={(event) => handleDateChange(studio.id, event)}
              />
              <label>Select Start Time:</label>
              <input
                type="time"
                value={selectedStartTimes[studio.id] || ''}
                onChange={(event) => handleStartTimeChange(studio.id, event)}
              />
              <label>Select End Time:</label>
              <input
                type="time"
                value={selectedEndTimes[studio.id] || ''}
                onChange={(event) => handleEndTimeChange(studio.id, event)}
              />
            </div>
            <button onClick={() => handleBooking(studio.id)}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudiosList;
