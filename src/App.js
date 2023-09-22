import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/Landingpage';
import StudiosPage from './components/StudiosPage';
import Login from './components/Login'; // Import the Login component
import Signup from './components/Signup'; // Import the Signup component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Add navigation links for Login and Signup */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studios" element={<StudiosPage />} />
          
          {/* Add routes for Login and Signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Add more routes as needed */}
        </Routes>
        {/* Add other components and content here */}
      </div>
    </Router>
  );
}

export default App;
