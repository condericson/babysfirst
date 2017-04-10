import React, { Component } from 'react';
// imports go here
class Login extends Component {
  render() {
    return (
      <div className="login-screen">
        <form className="loginform">
          <header>Log in</header>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Login;
