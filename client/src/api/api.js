import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://localhost:5000/api',
 baseURL: process.env.REACT_APP_API_BASE_URL || import.meta.env.VITE_API_BASE_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
