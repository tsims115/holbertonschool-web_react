import React from 'react';
import PropTypes from 'prop-types'
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
      email: '',
      password: '',
      enableSubmit: false,
      logIn: this.props.logIn
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.checkEmailandPassword = this.checkEmailandPassword.bind(this)
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.state.logIn(this.state.email, this.state.password);
  }

  checkEmailandPassword(email, password) {
    if (email !== '' && password !== '') {
      this.setState({
        enableSubmit: true
      })
    } else {
      this.setState({
        enableSubmit: false
      })
    }
  }

  handleChangeEmail(event) {
    this.checkEmailandPassword(this.state.email, this.state.password);
    this.setState({
      email: event.target.value
    });
  }

  handleChangePassword(event) {
    this.checkEmailandPassword(this.state.email, this.state.password);
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
    <React.Fragment>
      <form action='' className={css(login.form)} onSubmit={this.handleLoginSubmit}>
        <p>Login to access the full dashboard</p>
        <div className={css(login.input)}>
          <label className={css(headerStyle.login)} htmlFor='email'>Email</label>
          <input onChange={this.handleChangeEmail} id='email' type="text" value={this.state.email} />
        </div>
        <div className={css(login.input)}>
          <label htmlFor='password'>Password</label>
          <input onChange={this.handleChangePassword} id='password' type="text" value={this.state.password} />
        </div>
        <input value="OK" type='submit' disabled={!this.state.enableSubmit} />
      </form>
    </React.Fragment>
  );}
}

Login.propTypes = {
  logIn: PropTypes.func
};

Login.defaultProps = {
  logIn: () => {}
};

export default Login;
