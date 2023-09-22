import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudiosList from './StudiosList'; // Import the StudiosList component

function StudiosPage() {
  const [studios, setStudios] = useState([]);
  const [selectedStudio, setSelectedStudio] = useState(null); // State to track the selected studio

  useEffect(() => {
    // Make a GET request to your API endpoint
    axios.get('http://localhost:3000/api/studios/studios')
      .then((response) => {
        // Handle the response data
        setStudios(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching studios:', error);
      });
  }, []);

  // Function to handle studio selection
  const handleStudioSelect = (studio) => {
    setSelectedStudio(studio);
  };

  return (
    <div className="studios-page">
      <h1>Explore Our Studios</h1>
      <p>Discover a variety of creative spaces for your projects and you will like it.</p>

      {/* Render the list of studios */}
      <StudiosList studios={studios} onStudioSelect={handleStudioSelect} />

      {/* Render selected studio details */}
      {selectedStudio && (
        <div className="selected-studio">
          <h2>{selectedStudio.name}</h2>
          <p>{selectedStudio.description}</p>
          {/* Add more studio details here */}
        </div>
      )}
    </div>
  );
}

export default StudiosPage;
