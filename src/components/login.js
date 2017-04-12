import React, { Component } from 'react';
import { fetchAPI } from '../utils/api';
// imports go here
class Login extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  changeValue = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitForm = e => {
    e.preventDefault();
    const loggingUser = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(loggingUser);
    fetchAPI('users/login', 'POST', loggingUser)
      .then(res => res.json)
      .then(res => console.log(res.json, res))
      .catch(err => console.log(err));
  }

  disabledButton() {
    const { username, password, confirmPassword } = this.state;
    if (username.length < 3 || password.length < 3 || (password !== confirmPassword)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="login-screen">
        <form className="loginform" onSubmit={this.submitForm}>
          <header>Log in</header>
          <input type="text" id="username" placeholder="username" value={this.state.username} onChange={this.changeValue} />
          <input type="password" id="password" placeholder="password" value={this.state.password} onChange={this.changeValue} />
          <input type="password" id="confirmPassword" placeholder="confirm password" value={this.state.confirmPassword} onChange={this.changeValue} />
          <button type="submit" disabled={this.disabledButton()} >Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
