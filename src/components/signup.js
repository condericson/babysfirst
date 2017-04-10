import React, { Component } from 'react';
// imports go here

class Signup extends Component {
  render() {
    return (
      <div className="signup-screen">
        <form className="signupform">
          <header>Sign up</header>
          <p>Enter your child's birthday!</p>
          <input type="date" />
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Signup;
