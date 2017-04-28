import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import $ from 'jquery';
import { login } from '../actions/user';
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
    this.props.login(loggingUser);
  }

  disabledButton() {
    const { username, password, confirmPassword } = this.state;
    if (username.length < 3 || password.length < 3 || (password !== confirmPassword)) {
      $('.login_button').removeClass('loginbutton_hover');
      return true;
    }
    $('.login_button').addClass('loginbutton_hover');
    return false;
  }

  render() {
    const errorMessageP = <p className="errorMessage">Invalid entry</p>;
    let errorMessage = null;
    if (this.props.error !== null) {
      errorMessage = errorMessageP;
    }
    return (
      <div className="login-screen">
        <nav className="login_nav">
          <Link to="/" className="login_tohome">Home</Link>
          <Link to="/signup" className="login_tosignup">Sign up</Link>
        </nav>
        <div className="loginform_container">
          <form className="loginform" onSubmit={this.submitForm}>
            <header className="loginheader">Log in</header>
            <input className="login_input" type="text" id="username" placeholder="username" value={this.state.username} onChange={this.changeValue} />
            <input className="login_input" type="password" id="password" placeholder="password" value={this.state.password} onChange={this.changeValue} />
            <input className="login_input" type="password" id="confirmPassword" placeholder="confirm password" value={this.state.confirmPassword} onChange={this.changeValue} />
            <button className="login_button" type="submit" disabled={this.disabledButton()} >Log in</button>
            {errorMessage}
          </form>
        </div>

      </div>
    );
  }
}

export default connect(state => ({
  loading: state.user.loading,
  error: state.user.loginError,
}),
  { login },
)(Login);
