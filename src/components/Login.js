import "./LoginForm.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // Define state variables for the form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Get the navigate function from useNavigate
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Construct the data to send to the backend
      const dataToSend = {
        email: formData.email,
        password: formData.password,
      };

      // Send the data to the backend using a fetch or axios request
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      // Handle the response here, e.g., set user session
      const responseData = await response.json();
      console.log(responseData);

      // If login is successful, redirect to the home page
      if (response.status === 200) {
        navigate('/Studios'); // Replace '/' with the actual URL of your home page
      }

      // Clear form inputs after successful submission
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div id="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email} // Add this line to bind the value to the state
          onChange={handleChange} // Add this line to handle input changes
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password} // Add this line to bind the value to the state
          onChange={handleChange} // Add this line to handle input changes
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
