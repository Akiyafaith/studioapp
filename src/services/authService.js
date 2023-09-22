// src/services/authService.js
import axios from 'axios';

//const BASE_URL = 'http://localhost:3000/api/auth'; // Update with your backend URL

export const Signup = async (formData) => {
  try {
    const response = await axios.post(`/api/auth/signup`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (formData) => {
  try {
    const response = await axios.post(`/api/auth/login`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
