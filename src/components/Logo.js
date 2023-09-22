import React from 'react';
import './logo.css'; // Import the CSS file for the Logo component
import logo from './logo.jpeg';

function Logo() {
  return (
    <div className="logo">
      <img 
        src={logo}
        alt=""
        className='logo-image'
      />
      <div className="logo-content">
        <nav className="right-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/studios">Studios</a></li>
            <li><a href="/bookings">Bookings</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="/Signup">Signup</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Logo;
