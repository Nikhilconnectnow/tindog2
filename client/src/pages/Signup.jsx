import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
   
      const res = await API.post('/users/register', { name, email, password });
      const { user, token } = res.data;


      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      toast.success('Signup successful');
      navigate('/profile');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex min-h-screen  items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-[#ff4c68] p-8 rounded-xl shadow-md">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 text-white font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-orange py-2 rounded-md hover:bg-pink-500 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-zinc-200 text-sm text-gray-200">
          Already have an account?{' '}
          <Link to="/login" className="text-zinc-200  hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
