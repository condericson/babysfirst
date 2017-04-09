import React from 'react';
//imports go here
class Login extends Component{
  render() {
    return (
      <div className="login-screen">
        <form ref="loginform" className="loginform">
          <header>Log in</header>
          <input type="text" ref="username" placeholder="username" />
          <input type="text" ref="password" placeholder="password" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Login;
