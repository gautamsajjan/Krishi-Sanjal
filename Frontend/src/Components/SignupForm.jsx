import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Changed from 'useHistory' to 'useNavigate' for React Router v6+

const SignupForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    role: 'consumer', // default role is consumer
    registrationCode: '',
    shopName: '',
    address: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Using useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Call backend API to register user (POST request)
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        // Set user in state after successful signup
        onLogin(result.user);

        // Redirect to farmer page if the user is a farmer
        if (result.user.role === 'farmer') {
          navigate('/farmer'); // Use navigate instead of history.push
        }
      } else {
        setError(result.message || 'Signup failed!');
      }
    } catch (err) {
      setError('Server error, please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign up for Krishi Sanjal</h2>

        {/* Form Fields for Signup */}
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

        {/* Select Role */}
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="consumer">Consumer</option>
          <option value="farmer">Farmer</option>
        </select>

        {/* Farmer specific fields */}
        {formData.role === 'farmer' && (
          <>
            <input type="text" name="registrationCode" placeholder="Registration Code" value={formData.registrationCode} onChange={handleChange} required />
            <input type="text" name="shopName" placeholder="Shop Name" value={formData.shopName} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          </>
        )}

        {error && <p>{error}</p>}
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;









