import React from 'react';
import { Link } from 'react-router';

const Splash = React.createClass({
  render() {
    return (
      <div className="login-form">
        <nav>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Log In</Link>
        </nav>
        <div>
          {/*pretty picture with title*/}
        </div>
        <div>
          {/*explanation of app*/}
        </div>
        <div>
          {/*button to signup*/}
        </div>
      </div>
    )
  }
})

export default Splash;
