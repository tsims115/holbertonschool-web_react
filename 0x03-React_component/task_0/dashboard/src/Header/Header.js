import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const headerStyle = StyleSheet.create({
  header: {
    display: 'flex',
    borderBottom: '#E0354B solid',
  },
  headerH1: {
    display: 'flex',
    color: '#E0354B',
    marginTop: '70px'
  },
  headerImg: {
    height: '200px',
    width: '200px',
  }
});

function Header() {
  return (
    <header className={css(headerStyle.header)}>
        <img src={logo} className={css(headerStyle.headerImg)} alt="logo" />
        <h1 className={css(headerStyle.headerH1)}>School Dashboard</h1>
    </header>
  );
}

export default Header;
