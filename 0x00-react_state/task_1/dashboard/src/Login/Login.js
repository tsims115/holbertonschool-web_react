import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const headerStyle = StyleSheet.create({
  login: {
    width: '100%',
    margin: 'auto'
  }
});
const login = StyleSheet.create({
  form: {
    '@media (max-width: 900px)': {
      
    }
  },
  input: {
    '@media (max-width: 900px)': {
      
    }
  }
})

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleLoginSubmit(e) {
    alert('')
    e.preventDefault();
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    return (
    <React.Fragment>
      <form className={css(login.form)} onSubmit={this.handleLoginSubmit}>
        <p>Login to access the full dashboard</p>
        <div className={css(login.input)}>
          <label className={css(headerStyle.login)} htmlFor='email'>Email</label>
          <input id='email' type="text" />
        </div>
        <div className={css(login.input)}>
          <label htmlFor='password'>Password</label>
          <input id='password' type="text" />
        </div>
        <input value="OK" type='submit' />
      </form>
    </React.Fragment>
  );}
}

export default Login;
