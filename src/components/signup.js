import React from 'react';
//imports go here

class Signup extends Component{
  render() {
    return (
      <div className="signup-screen">
        <form ref="signupform" className="signupform">
          <header>Sign up</header>
          <p>Enter your child's birthday!</p>
          <input type="date" ref="birthday" />
          <input type="text" ref="username" placeholder="username" />
          <input type="text" ref="password" placeholder="password" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Signup;
