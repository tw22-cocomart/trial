import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext); // Access login function from context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic: In a real app, you'd verify this with a database.
    // For now, we'll just "log in" whatever email is entered.
    const userData = { email, name: email.split('@')[0] }; 
    
    login(userData);
    alert('Logged in successfully!');
    navigate('/profile'); // Redirect to profile after login
  };

  return (
    <main className="main">
      <div className="log-container">
        <p className="log-title">Log in</p>

        <form id="login-form" onSubmit={handleSubmit}>
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>

        <p>No account yet? <Link to="/signup">Create one</Link></p>
      </div>
    </main>
  );
};

export default Login;