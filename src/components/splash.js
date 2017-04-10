import React, { Component } from 'react';
import { Link } from 'react-router';
// import '../styles/splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="login-form">
        <nav>
          <div className="menucontainer">
            <img src="./images/Brick-64.png" alt="menuimage" />
            <ul className="animate ">
              <Link to="/signup" className="signupbutton button"><li>Signup</li></Link>
              <Link to="/login" className="loginbutton button"><li>Log In</li></Link>
            </ul>
          </div>
        </nav>
        <div className="splashSectionOne">
          <h1>First Memories</h1>
        </div>
        <div className="splashSectionTwo">
          <ul className="icons">
            <li>
              <img src="./images/Pencil-48.png" alt="pencil" />
              <div className="hoverview pencildiv">
                <p>Record a moment in your own words.</p>
              </div>
            </li>
            <li>
              <img src="./images/Picture-50.png" alt="pictureframe" />
              <div className="hoverview pictureframediv">
                <p>Include a picture.</p>
              </div>
            </li>
            <li>
              <img src="./images/Playground-50.png" alt="playground" />
              <div className="hoverview playgrounddiv">
                <p>Relive the experiences on a timeline of your own making.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="splashSectionThree">
          <p className="everymoment">Every moment with a child is precious, but some moments become memories.</p>
        </div>
        <div className="splashSectionFour">
          <Link to="/signup" className="signupbutton button"><li>Signup</li></Link>
        </div>
        <div className="footer">
          <p className="built">Built by Connor Ericson</p>
          <a href="https://icons8.com/web-app/1106/Picture">Picture icon credits</a>
        </div>
        <Link to="/timeline" className="timelinebutton button"><li>Timeline</li></Link>
      </div>
    );
  }
}

export default Splash;
