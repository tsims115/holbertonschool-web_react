import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const headerStyle = StyleSheet.create({
  login: {
    width: '100%'
  }
});

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label className={css(headerStyle.login)} htmlFor='email'>Email</label>
      <input id='email' type="text" />
      <label htmlFor='password'>Password</label>
      <input id='password' type="text" />
      <button>Ok</button>
    </React.Fragment>
  );
}

export default Login;
