import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import userContext from '../App/AppContext';

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
  },
  logout: {
    cursor: 'pointer'
  }
});

class Header extends React.Component {
  render() {
    return (
      <header className={css(headerStyle.header)}>
        { this.context.user.isLoggedIn && 
          <p id='logoutSection'>Welcome {this.context.user.email} <a onClick={this.context.logOut} className={css(headerStyle.logout)}>(<em>logout</em>)</a></p>
        }
          <img src={logo} className={css(headerStyle.headerImg)} alt="logo" />
          <h1 className={css(headerStyle.headerH1)}>School Dashboard</h1>
      </header>
    );
  }
}

Header.contextType = userContext

export default Header;
