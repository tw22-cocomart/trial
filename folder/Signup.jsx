import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  // State to handle multiple input fields
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    // In a real app, you would send formData to an API here.
    // For now, we "log them in" with the data they just provided.
    login(formData);
    
    alert("Account created successfully!");
    navigate('/profile');
  };

  return (
    <main className="main">
      <div className="sign-container">
        <p className="log-title">Create your account</p>

        <form id="signup-form" onSubmit={handleSignup}>
          <input 
            name="name" 
            type="text" 
            placeholder="Full Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            name="address" 
            type="text" 
            placeholder="Address" 
            value={formData.address}
            onChange={handleChange}
            required 
          />
          <input
            name="contact"
            type="text"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-pretty">Sign Up</button>
        </form>

        <p>Already registered? <Link to="/login">Login</Link></p>
      </div>
    </main>
  );
};

export default Signup;