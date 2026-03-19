import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // Clears the user state in Context
    alert("You have been logged out.");
    navigate('/login');
  };

  return (
    <main className="main">
      <div className="prof-container">
        <h1 style={{ textTransform: 'lowercase' }}>cocomart</h1>
        <h2>Profile</h2>

        <div className="card">
          <div className="row">
            <strong>Name:</strong>
            <span id="name">{user?.name || 'Juan Dela Cruz'}</span>
          </div>
          <div className="row">
            <strong>Address:</strong>
            <span id="address">{user?.address || '123 Coconut St., Manila'}</span>
          </div>
          <div className="row">
            <strong>Contact:</strong>
            <span id="contact">{user?.contact || '+63 912 345 6789'}</span>
          </div>
          <div className="row">
            <strong>Email:</strong>
            <span id="email">{user?.email || 'user@example.com'}</span>
          </div>
        </div>

        <div className="prof-links" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <Link to="/history">Transaction History</Link>
          <a id="logout-link" href="/login" onClick={handleLogout} style={{ color: 'red' }}>
            Log out
          </a>
        </div>
      </div>
    </main>
  );
};

export default Profile;