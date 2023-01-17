import './Login.css';
import React from 'react';

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input id='email' type="text" />
      <label htmlFor='password'>Password</label>
      <input id='password' type="text" />
      <button>Ok</button>
    </React.Fragment>
  );
}

export default Login;
