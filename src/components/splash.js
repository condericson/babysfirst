import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import '../styles/splash.css';

class Splash extends Component {
  componentDidMount() {
    $('.hoverview1').hover(() => {
      $('.pencildiv').removeClass('hidden');
      $('.pencildiv').toggleClass('fadeIn fadeOut');
    });
    $('.hoverview2').hover(() => {
      $('.pictureframediv').removeClass('hidden');
      $('.pictureframediv').toggleClass('fadeIn fadeOut');
    });
    $('.hoverview3').hover(() => {
      $('.playgrounddiv').removeClass('hidden');
      $('.playgrounddiv').toggleClass('fadeIn fadeOut');
    });
    $('.menucontainer').click(() => {
      if ($('.dropdown').hasClass('dropdownopen')) {
        setTimeout(() => { $('.dropdown').removeClass('dropdownopen'); }, 300);
      }
      $('.dropdown').addClass('dropdownopen');
      $('.dropdown').toggleClass('fadeIn fadeOut');
    });
  }

  render() {
    return (
      <div className="login-form">
        <nav>
          <ul className="fullscreen">
            <Link to="/signup" className="signupbutton button whiteglow"><li>Sign up</li></Link>
            <Link to="/login" className="loginbutton button whiteglow"><li>Log In</li></Link>
          </ul>
          <div className="menucontainer">
            <div className="menuButtonContainer">
              <img src="./images/Brick-64.png" alt="menuimage" />
            </div>
            <ul className="animated dropdown fadeOut">
              <Link to="/signup" className="signupbutton button whiteglow"><li>Signup</li></Link>
              <Link to="/login" className="loginbutton button whiteglow"><li>Log In</li></Link>
            </ul>
          </div>
        </nav>
        <div className="splashSectionOne">
          <h1>First Memories</h1>
        </div>
        <div className="splashSectionTwo">
          <p className="journal">A new kind of journal.</p>
          <ul className="icons">
            <li className="hoverview1">
              <img src="./images/Pencil-48.png" alt="pencil" />
              <div className="animated hidden fadeOut pencildiv">
                <p>Record a moment in your own words.</p>
              </div>
            </li>
            <li className="hoverview2">
              <img src="./images/Picture-50.png" alt="pictureframe" />
              <div className="animated hidden fadeOut pictureframediv">
                <p>Add a picture of the amazing event</p>
              </div>
            </li>
            <li className="hoverview3">
              <img src="./images/Playground-50.png" alt="playground" />
              <div className="animated hidden fadeOut playgrounddiv">
                <p>Relive the experiences on a personalized timeline.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="splashSectionThree">
          <div className="sectionThreeContainer">
            <p className="everymoment">Every moment with a child is precious, but some moments become memories.</p>

          </div>

        </div>
        <div className="splashSectionFour">
          <div className="center">
            <p className="neverforget">Never forget a single first.</p>
            <Link to="/signup" className="signupbutton button2">Sign up</Link>
            <Link to="/login" className="loginbutton button2">Log In</Link>
          </div>
        <div className="footer">
          <p className="built">
            <span className="by">Built by Connor Ericson</span>
            <div className="githubcontainer">
              <i className="fa fa-github fa-2x githubLogo" aria-hidden="true" />
            </div>
          </p>
          <a href="https://icons8.com/web-app/1106/Picture">Picture icon credits</a>
        </div>
        <Link to="/timeline" className="timelinebutton button"><li>Timeline</li></Link>
        </div>
      </div>
    );
  }
}

export default Splash;
