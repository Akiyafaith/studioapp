import React from 'react';
import './Header.css';
import Logo from './Logo';

function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
