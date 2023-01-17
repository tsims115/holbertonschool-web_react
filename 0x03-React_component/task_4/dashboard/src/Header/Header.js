import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import React from 'react';

function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
    </header>
  );
}

export default Header;
