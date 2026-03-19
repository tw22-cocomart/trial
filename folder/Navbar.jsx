import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img className="logo" src="images/cocomart-logo.png" alt="logo" />
        </Link>
        <h2>CocoMart</h2>
      </div>

      <div className="nav-center">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>

      <div className="nav-right">
        <ul id="nav-right-list">
          {user ? (
            <>
              <li><Link to="/cart"><img className="icon cart" src="images/icon-cart-line.png" alt="cart" /></Link></li>
              <li><Link to="/profile"><img className="icon profile" src="images/icon-profile-line.png" alt="profile" /></Link></li>
              <li>
                <a href="#" onClick={handleLogout}>
                  <img className="icon logout" src="images/icon-login-line.png" alt="logout" />
                </a>
              </li>
            </>
          ) : (
            <li><Link to="/login" className="alt-nav">Log In</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;